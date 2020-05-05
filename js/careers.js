let careers = {
    "jobTitle": "Mid-Level Enterprise Monitoring Systems Analyst- MoogSoft (Remote Allowed) ",
    "job-description": "The Enterprise Monitoring Analyst will support the US Census Enterprise Operations teams.  The candidate will be responsible for managing the day-to-day operations of the Enterprise Cisco Crosswork Situation Analyst system, responsible for managing its assets and providing monitoring support to the Enterprise Operations Center (EOC). The Enterprise Monitoring Analyst will oversee the deployment, development, onboarding and management of the Manager of Managers (MoM) for all Enterprise IT assets (i.e. infrastructure, system and applications) into Situation Manager.   The candidate will be responsible for providing health and performance reports, developing AIOps rules, creating alerts, creating custom dashboards and maintaining associated CMDB’s and relevant metadata.  Additionally, the candidate will be responsible for the effective and efficient operational support of all enterprise monitoring tools used to support the mission.  Such tools include supporting SolarWinds, Splunk, AppDynamics, MicroFocus tools (BSM, SiteScope, OMW, etc.) and in-house developed support tools. The Enterprise Monitoring Analyst will support the EOC and Operations teams by providing in-depth health and performance analysis as required. S/He will interact daily with supervisory, technical, and client staff on all project matters within the area of responsibility. Must work well with general guidance, generate competent technical input for operations type documentation, be detailed and security oriented.  Must have excellent oral and written communications skills, as well as excellent interpersonal skills to deal with multiple contractors and government organization.  Must have worked in large enterprise class type environments, be in line with industry best practices, think outside the box, and be able to make recommendations to improve overall governance and support continuous improvement.",
    "duty": [
        "Recommend improvements to enhance information system operational availability, reliability, performance of the EOC’s customer base",
        "Assist in the establishment of templates, knowledge base articles and scripts required to support the Enterprise Operations Center (EOC) during incident response",
        "Maintain relevant service delivery catalogs and associated monitoring baselines",
        "Manage, track, report, and perform all tasks as assigned"
    ],
    "quals": [
        "4-6 years of progressive enterprise health & performance monitoring experience",
        "Infrastructure and application support experience",
        "Customer advocate capable of exceeding expectations and incorporating customer service into all aspects of work"
    ],
    "shiftWork": [
        "Base Shift hours: 8:00 AM ET – 5:00 PM ET, M-F (flexibility is required)",
        "Must be available for on-call support as required",
        "Work location: Bowie, MD",
        "Can Telework up to three days a week"
    ],
    "securReq": "Candidate must be a U.S. Citizen and able to pass a Public Trust Assessment",
    "placeOfPerf": [
        "Base Shift hours: 8:00 AM ET – 5:00 PM ET, M-F (flexibility is required)",
        "Must be available for on-call support as required",
        "Work location: Bowie Computer Center – Bowie, MD"
    ]
};

careers.jobTitle.forEach(myFunction);

function myFunction(item) {
    document.getElementById("career-jobs").innerHTML = item;
}