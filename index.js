// Ensure DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Access form elements
    var resumeForm = document.getElementById('resume-form');
    // Access form fields
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var educationInput = document.getElementById('education');
    var workExperienceInput = document.getElementById('work-experience');
    var skillsInput = document.getElementById('skills');
    // Access output fields
    var outputName = document.getElementById('output-name');
    var outputEmail = document.getElementById('output-email');
    var outputEducation = document.getElementById('output-education');
    var outputWorkExperience = document.getElementById('output-work-experience');
    var outputSkills = document.getElementById('output-skills');
    // Validate form function
    function validateForm() {
        var isValid = true;
        // Clear previous errors (if any)
        var formFields = [nameInput, emailInput, educationInput, workExperienceInput, skillsInput];
        formFields.forEach(function (field) {
            field.style.borderColor = ''; // Clear red border if any
        });
        // Basic validation
        if (!nameInput.value.trim()) {
            nameInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!emailInput.value.includes('@') || !emailInput.value.trim()) {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!educationInput.value.trim()) {
            educationInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!workExperienceInput.value.trim()) {
            workExperienceInput.style.borderColor = 'red';
            isValid = false;
        }
        if (!skillsInput.value.trim()) {
            skillsInput.style.borderColor = 'red';
            isValid = false;
        }
        return isValid;
    }
    // Update resume output
    function updateResume() {
        outputName.textContent = nameInput.value;
        outputEmail.textContent = emailInput.value;
        outputEducation.textContent = educationInput.value;
        outputWorkExperience.textContent = workExperienceInput.value;
        outputSkills.textContent = skillsInput.value;
    }
    // Form submit event listener
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting
        // Validate form fields
        if (validateForm()) {
            updateResume(); // Update the resume dynamically if validation is successful
        }
    });
});
