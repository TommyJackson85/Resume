// Replace a placeholder value in an html string and then adds it to DOM
function replace(placeholder, value, dom_name, html_string) {
    var final_value = html_string.replace(placeholder, value);
    $(dom_name).append(final_value);
}

/*
 * Seperating DOM into its DIVs for javascript manipulation.
 */
// Placeholder to replace
var placeholder = '%data%';
/* Bio Class */
var Bio = function() {
    this.name = "Austin Crane";
    this.role = "Developer";
    this.welcome = "Hello World!";
    // twitter picture
    this.picture = "images/profile_pic.jpg";
    this.contacts = {
        "email": "austin@coffeehousedevelopers.com",
        "twitter": "https://twitter.com/austinmcrane",
        "github": "https://github.com/WizKIDz",
        "blog": "http://wizkidz.github.io",
        "location": "Wichita, KS"
    };
    this.skills = ["iOS App Development", "Web Applications", "Python", "Objectiv-C", "C++/C", "Making things work when they dont :)"];

    this.list_items = [HTMLcontactGeneric, HTMLtwitter, HTMLgithub, HTMLblog, HTMLlocation];

    this.display = function() {
        // Add my role
        var role_name = HTMLheaderRole.replace(placeholder, this.role);
        $('#header').prepend(role_name);
        // Add my name
        var header_name = HTMLheaderName.replace(placeholder, this.name);
        $('#header').prepend(header_name);
        // Add contact info to list
        var i = 0;
        for (var key in this.contacts) {
            var dom_element = this.list_items[i];
            var value = this.contacts[key];
            var final_value = dom_element.replace(placeholder, value);
            $('#topContacts').append(final_value);
            $('#footerContacts').append(final_value);
            i++;
        };
        // Add Profile Picture
        var pic_value = HTMLbioPic.replace(placeholder, this.picture);
        $('#header').append(pic_value);
        // Add Welcome message
        var wel_value = HTMLWelcomeMsg.replace(placeholder, this.welcome);
        $('#header').append(wel_value);
        // Skills title
        var skills = $('#header').append(HTMLskillsStart);
        // Skills
        for (var i = 0; i < this.skills.length; i++) {
            var skill_value = HTMLskills.replace(placeholder, this.skills[i]);
            $('#skills').append(skill_value);
        };
    }
};

/* Work Class */
var Work = function() {
    this.jobs = [{
        "employer": "NIAR",
        "title": "iOS App Developer",
        "location": "Wichita, KS",
        "dates": "January 2014 - Present",
        "description": "Creating apps for internal and clients who need apps for cheap."
    }, {
        "employer": "NIAR",
        "title": "Robot Operator",
        "location": "Wichita, KS",
        "dates": "January 2013 - January 2014",
        "description": "Using ABB robots to do usefull manuafaturing applications"
    }];
    this.display = function() {
        // Work Title
        for (var i = 0; i < this.jobs.length; i++) {
            // Job Object
            var job = this.jobs[i];
            // Start Job
            $('#workExperience').append(HTMLworkStart);
            var dom = $('#workExperience').children().last();

            // Title of job section
            var employer_html = HTMLworkEmployer.replace(placeholder, job.employer);
            var title_html = HTMLworkTitle.replace(placeholder, job.title);
            $(dom).append(employer_html + title_html);
            // Sub title
            var dates_html = HTMLworkDates.replace(placeholder, job.dates);
            $(dom).append(dates_html);
            // Location
            var location_html = HTMLworkLocation.replace(placeholder, job.location);
            $(dom).append(location_html);
            // Body of job
            var description_html = HTMLworkDescription.replace(placeholder, job.description);
            $(dom).append(description_html);
        };
    }
};

/* Projects Class */
var Projects = function() {
    this.projects = [{
        "title": "Startup HQ",
        "dates": "October 2015",
        "description": "Startup HQ is a place where ideas, resources, and people coalesce; where entrepreneurship meets community. Our mission is to provide startups, groups, and interested individuals with the tools they need to find and market services, skills, and people. At Startup HQ the resources and individuals needed to form a business also forms a community. A marketplace of entrepreneurship and innovation connected through a new era of collaboration.",
        "images": ["images/startuphq/startuphq.png", "images/startuphq/startuphq1.png"]
    }];
    this.display = function() {
        for (var i = 0; i < this.projects.length; i++) {
            // project Object
            var project = this.projects[i]
                // Start project
            $('#projects').append(HTMLprojectStart);
            var dom = $('#projects').children().last();
            // Title of project section
            var title_html = HTMLprojectTitle.replace(placeholder, project.title);
            $(dom).append(title_html);
            // Sub title
            var dates_html = HTMLprojectDates.replace(placeholder, project.dates);
            $(dom).append(dates_html);
            // Body of project
            var description_html = HTMLprojectDescription.replace(placeholder, project.description);
            $(dom).append(description_html);
            for (var i = 0; i < project.images.length; i++) {
                var image = HTMLprojectImage.replace(placeholder, project.images[i]);
                $(dom).append(image);
            };
        };
    }
};

/* Education Class */

var Education = function() {
    this.schools = [{
        "name": "Wichita State University",
        "location": "Wichita, KS",
        "degree": "BA",
        "majors": ["Computer Science"],
        "dates": "2017",
        "url": "www.wichita.edu"
    }];
    this.online = [{
        "title": "Frontend Nano Degree",
        "school": "Udacity",
        "date": "2016",
        "url": "udacity.com"
    }];
    this.display = function() {
        // Schools Classes
        for (var i = 0; i < this.schools.length; i++) {
            // school Object
            var school = this.schools[i];
            // Start school
            $('#education').append(HTMLschoolStart);
            var dom = $('#education').children().last();
            console.log(dom);
            // Title of school section
            var title_html = HTMLschoolName.replace(placeholder, school.name);
            var degree_html = HTMLschoolDegree.replace(placeholder, school.degree);
            $(dom).append(title_html + degree_html);
            // Sub title
            var dates_html = HTMLschoolDates.replace(placeholder, school.dates);
            $(dom).append(dates_html);
            for (var i = 0; i < school.majors.length; i++) {
                var major = HTMLschoolMajor.replace(placeholder, school.majors[i]);
                $(dom).append(major);
            };
            // Online Classes
            $('#education').append(HTMLonlineClasses);
            for (var i = 0; i < this.online.length; i++) {
                // school Object
                var online = this.online[i]
                    // Start school
                $('#education').append(HTMLschoolStart);
                var dom = $('#education').children().last();
                // Title of oniline section
                var title_html = HTMLonlineTitle.replace(placeholder, online.title);
                $(dom).append(title_html);
                // Sub title
                var dates_html = HTMLonlineDates.replace(placeholder, online.date);
                $(dom).append(dates_html);
                var url_html = HTMLonlineURL.replace(placeholder, online.url);
                $(dom).append(url_html);
                // Body of oniline
            };
        }

    }
}


/*
 * Implementation of classes to add dom elements 
 */
var bio = new Bio();
var work = new Work();
var projects = new Projects();
var education = new Education();
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);