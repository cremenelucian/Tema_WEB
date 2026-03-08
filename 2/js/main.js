document.addEventListener("DOMContentLoaded", () => {
  const resourceList = document.getElementById("resourceList");
  const tagList = document.getElementById("tagList");
  const typeFilter = document.getElementById("typeFilter");
  const studyOnlyCheckbox = document.getElementById("studyOnly");

  let resources = [];

  function renderResources() {
    const selectedType = typeFilter.value;
    const studyOnly = studyOnlyCheckbox.checked;

    const filtered = resources.filter((res) => {
      const matchesType = selectedType === "all" || res.type === selectedType;
      const matchesStudy =
        !studyOnly || (Array.isArray(res.tags) && res.tags.includes("study"));
      return matchesType && matchesStudy;
    });

    resourceList.innerHTML = "";

    if (filtered.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Nu au fost găsite resurse pentru filtrul selectat.";
      resourceList.appendChild(li);
      return;
    }

    filtered.forEach((res) => {
      const li = document.createElement("li");
      li.className = "resource-item";
      li.innerHTML = `
        <h3>${res.name}</h3>
        <p><strong>Tip:</strong> ${res.type}</p>
        <p><strong>Locație:</strong> ${res.location}</p>
        <p><strong>Program:</strong> ${res.program}</p>
        <p><strong>Tag-uri:</strong> ${Array.isArray(res.tags) ? res.tags.join(", ") : ""}</p>
      `;
      resourceList.appendChild(li);
    });
  }

  function renderTypes() {
    const types = new Set(resources.map((res) => res.type));
    // păstrăm prima opțiune "Toate"
    typeFilter.innerHTML = '<option value="all">Toate</option>';
    types.forEach((type) => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      typeFilter.appendChild(option);
    });
  }

  function renderTags() {
    const tags = new Set();
    resources.forEach((res) => {
      if (Array.isArray(res.tags)) {
        res.tags.forEach((t) => tags.add(t));
      }
    });

    tagList.innerHTML = "";
    tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tagList.appendChild(li);
    });
  }

  function initEvents() {
    typeFilter.addEventListener("change", renderResources);
    studyOnlyCheckbox.addEventListener("change", renderResources);
  }

  // încărcăm JSON-ul cu fetch
  fetch("data/resources.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Eroare la încărcarea resources.json");
      }
      return response.json();
    })
    .then((data) => {
      resources = data;
      renderTypes();
      renderResources();
      renderTags();
      initEvents();
    })
    .catch((error) => {
      console.error(error);
      if (resourceList) {
        resourceList.innerHTML = "<li>A apărut o eroare la încărcarea resurselor.</li>";
      }
    });
});

