document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const resumePreview = document.getElementById("resumePreview");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Fetch data from the form
      const fullName = document.getElementById("fullName").value;
      const school = document.getElementById("school").value;
      const university = document.getElementById("university").value;
      const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());
  
      // Generate the resume HTML
      const resumeHTML = `
        <h2>${fullName}</h2>
        <h3>Education</h3>
        <p>School: ${school}</p>
        <p>University: ${university}</p>
  
        <h3>Skills</h3>
        <ul>
          ${skills.map(skill => `<li>${skill}</li>`).join("")}
        </ul>
        <!-- Add other sections of the resume here -->
      `;
  
      // Display the generated resume
      resumePreview.innerHTML = resumeHTML;
    });
  });
  