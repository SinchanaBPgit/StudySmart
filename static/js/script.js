const course = {
    id: 1,
    name: "Data Structures and Algorithms",
    description: "Learn fundamental data structures and algorithms.",
    instructor: "John Smith",
    price: "$99",
    duration: "10 weeks",
    image: "data_structures.jpg"
};

function generateCourseDetailsHTML(course) {
    return `
        <div class="course-detail">
            <img src="${course.image}" alt="${course.name}">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
        </div>
    `;
}

function populateCourseDetails() {
    const courseDetailsElement = document.getElementById('course-details');
    const courseDetailsHTML = generateCourseDetailsHTML(course);
    courseDetailsElement.innerHTML = courseDetailsHTML;
}

window.onload = populateCourseDetails;

const courses = [
    { id: 1, name: "Data Structures and Algorithms", description: "Learn fundamental data structures and algorithms.", instructor: "John Smith", icon: "fa-code", image: "data_structures.jpg" },
    { id: 2, name: "Python Programming", description: "Master Python programming from basics to advanced concepts.", instructor: "Alice Johnson", icon: "fa-python", image: "python.jpg" },
    { id: 3, name: "Java Programming", description: "Learn Java programming language for building applications.", instructor: "Michael Brown", icon: "fa-java", image: "java.jpg" },
    { id: 4, name: "SQL Fundamentals", description: "Introduction to SQL for database management and querying.", instructor: "Emily Davis", icon: "fa-database", image: "sql.jpg" },
];

function generateCourseHTML(course) {
    return `
        <div class="course">
            <div class="course-icon">
                <i class="fas ${course.icon}"></i>
            </div>
            <img src="${course.image}" alt="${course.name}">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <p>Instructor: ${course.instructor}</p>
            <a href="course_details.html?id=${course.id}" class="button">View Details</a>
        </div>
    `;
}

function populateCourseList() {
    const courseListElement = document.getElementById('course-list');
    let courseHTML = '';
    courses.forEach(course => {
        courseHTML += generateCourseHTML(course);
    });
    courseListElement.innerHTML = courseHTML;
}

window.onload = populateCourseList;

const courses = [
    { id: 1, name: "Data Structures and Algorithms", description: "Learn fundamental data structures and algorithms.", instructor: "John Smith", image: "data_structures.jpg" },
    { id: 2, name: "Python Programming", description: "Master Python programming from basics to advanced concepts.", instructor: "Alice Johnson", image: "python.jpg" },
    { id: 3, name: "Java Programming", description: "Learn Java programming language for building applications.", instructor: "Michael Brown", image: "java.jpg" },
    { id: 4, name: "SQL Fundamentals", description: "Introduction to SQL for database management and querying.", instructor: "Emily Davis", image: "sql.jpg" },
];

function generateCourseHTML(course) {
    return `
        <div class="course">
            <img src="${course.image}" alt="${course.name}">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <p>Instructor: ${course.instructor}</p>
            <a href="course_details.html?id=${course.id}" class="button">View Details</a>
        </div>
    `;
}

function populateCourseList() {
    const courseListElement = document.getElementById('course-list');
    let courseHTML = '';
    courses.forEach(course => {
        courseHTML += generateCourseHTML(course);
    });
    courseListElement.innerHTML = courseHTML;
}

window.onload = populateCourseList;

const courses = [
    { id: 1, name: "Data Structures and Algorithms", description: "Learn fundamental data structures and algorithms.", instructor: "John Smith", image: "data_structures.jpg" },
    { id: 2, name: "Python Programming", description: "Master Python programming from basics to advanced concepts.", instructor: "Alice Johnson", image: "python.jpg" },
    { id: 3, name: "Java Programming", description: "Learn Java programming language for building applications.", instructor: "Michael Brown", image: "java.jpg" },
    { id: 4, name: "SQL Fundamentals", description: "Introduction to SQL for database management and querying.", instructor: "Emily Davis", image: "sql.jpg" },

];

function generateCourseHTML(course) {
    return `
        <div class="course">
            <img src="${course.image}" alt="${course.name}">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <p>Instructor: ${course.instructor}</p>
            <a href="course_details.html?id=${course.id}" class="button">View Details</a>
        </div>
    `;
}

function populateCourseList() {
    const courseListElement = document.getElementById('course-list');
    let courseHTML = '';
    courses.forEach(course => {
        courseHTML += generateCourseHTML(course);
    });
    courseListElement.innerHTML = courseHTML;
}

window.onload = populateCourseList;

setTimeout(function() {
    window.location.href = 'login.html';
}, 3000);
function fetchCourseDetails(courseId) {
    // Make a request to fetch course details based on courseId
    // Example:
    // fetch(/api/course/${courseId})
    //     .then(response => response.json())
    //     .then(data => {
    //         // Process and display course details
    //         displayCourseDetails(data);
    //     })
    //     .catch(error => console.error('Error fetching course details:', error));
}

function displayCourseDetails(course) {
    const courseDetailsElement = document.getElementById('course-details');
    courseDetailsElement.innerHTML = `
        <h2>${course.name}</h2>
        <p><strong>Instructor:</strong> ${course.instructor}</p>
        <p><strong>Price:</strong> ${course.price}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p>${course.description}</p>
        <!-- Add more course details as needed -->
    `;
}

function initializePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    if (courseId) {
        fetchCourseDetails(courseId);
    } else {
        console.error('Course ID not provided in URL.');
    }
}

window.onload = initializePage;

function selectCourse(courseId) {

    localStorage.setItem('selectedCourse', courseId);
    alert('Course selected!');
}

function displaySelectedCourses() {
    const selectedCourseId = localStorage.getItem('selectedCourse');
    if (selectedCourseId) {
        const selectedCourseElement = document.getElementById(selectedCourseId);
        if (selectedCourseElement) {
            selectedCourseElement.classList.add('selected');
        }
    }
}

window.onload = displaySelectedCourses;

function validateLoginForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please enter your email and password.');
        return false;
    }
    return true;
}

function validateRegisterForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '' || confirmPasswordInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match.');
        return false;
    }

    return true;
}

function typeEffect(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function startTypingAnimation() {
    const headlineElement = document.querySelector('.headline');
    const text = "Welcome to StudySmart";
    const speed = 100;
    typeEffect(headlineElement, text, speed);
}

window.onload = startTypingAnimation;

window.onload = function() {
    alert("Welcome to StudySmart!");
};
