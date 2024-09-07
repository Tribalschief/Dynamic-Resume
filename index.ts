// Ensure DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Access form elements
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    
    // Access form fields
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

    // Access output fields
    const outputName = document.getElementById('output-name') as HTMLElement;
    const outputEmail = document.getElementById('output-email') as HTMLElement;
    const outputEducation = document.getElementById('output-education') as HTMLElement;
    const outputWorkExperience = document.getElementById('output-work-experience') as HTMLElement;
    const outputSkills = document.getElementById('output-skills') as HTMLElement;

    // Validate form function
    function validateForm(): boolean {
        let isValid = true;

        // Clear previous errors (if any)
        const formFields = [nameInput, emailInput, educationInput, workExperienceInput, skillsInput];
        formFields.forEach((field) => {
            field.style.borderColor = '';  // Clear red border if any
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
    function updateResume(): void {
        outputName.textContent = nameInput.value;
        outputEmail.textContent = emailInput.value;
        outputEducation.textContent = educationInput.value;
        outputWorkExperience.textContent = workExperienceInput.value;
        outputSkills.textContent = skillsInput.value;
    }

    // Form submit event listener
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from submitting

        // Validate form fields
        if (validateForm()) {
            updateResume();  // Update the resume dynamically if validation is successful
        }
    });
});
