import CustomHead from '../components/CustomHead.js'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <CustomHead headTitle='Cloud Resume - Glenn Meyer' headDescription="Glenn Meyer's Cloud Resume" />
      <Layout />
      <main className='flex flex-col md:flex-row justify-center mt-5 font-main'>
        <aside className='md:sticky top-32 w-1/8 h-full mt-2 p-8 bg-sky-700 shadow-xl'>
          {/* Profile Picture */}
          <section className='flex items-center justify-center mb-10'>
            <img src='avatar.png' alt='Stylized avatar of Glenn Meyer' className='w-32' />
          </section>
          {/* Contact Section */}
          <section className='text-slate-100'>
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Contact
            </h2>
            <hr className='mb-5 w-1/6' />
            <p className='text-sm hover:text-sky-300'><a href='mailto:glenn@glennmeyer.dev'>glenn@glennmeyer.dev</a></p>
            <a href='https://www.linkedin.com/in/glenn-meyer-93a58583/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='mt-1'><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
          </section>
          {/* Education Section */}
          <section className='text-slate-100'>
            <hr className='my-5' />
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Education
            </h2>
            <hr className='mb-5 w-1/6' />
            <h3>BBA - Management</h3>
            <p className='text-sm'>Cleveland State University</p>
          </section>
          {/* Certifications Section */}
          <section className='text-slate-100'>
            <hr className='my-5' />
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Certifications
            </h2>
            <hr className='mb-5 w-1/6' />
            <p className='text-sm'>Certified Kubernetes Administrator</p>
            <p className='text-sm'>AWS Solutions Architect - Associate</p>
            <p className='text-sm'>Certified ScrumMaster</p>
          </section>
          {/* Skills Section */}
          <section className='text-slate-100'>
            <hr className='my-5' />
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Skills
            </h2>
            <hr className='mb-5 w-1/6' />
            <ul className='list-disc'>
              <li className='text-sm ml-4'>Enterprise Systems Architecture</li>
              <li className='text-sm ml-4'>Networking (Routing and Switching)</li>
              <li className='text-sm ml-4'>Information Security (Firewalls and Application Security)</li>
              <li className='text-sm ml-4'>Agile Software Development and Project Management</li>
              <li className='text-sm ml-4'>Workstation and Server Management (Windows and Linux)</li>
              <li className='text-sm ml-4'>Technical Documentation (including Visio)</li>
              <li className='text-sm ml-4'>AWS Lambda (Node.js) and DynamoDB</li>
              <li className='text-sm ml-4'>Javascript (including React/Next.js)</li>
              <li className='text-sm ml-4'>Virtualization (VMware and Hyper-V)</li>
            </ul>
          </section>
        </aside>
        <article className='md:w-7/12 w-auto h-auto mt-3 p-10'>
          <h1 className='text-sky-800 text-3xl font-semibold'>Glenn Meyer</h1>
          <p>Change Agent driving organizations towards agile development, cloud computing, automation, and embracing DevOps philosophy</p>
          <h2 className='font-semibold uppercase tracking-wider mt-6 mb-2 text-slate-500 text-2xl'>Professional Experience</h2>
          {/* Employer 1 Section */}
          <section>
            <h3 className='text-slate-700 text-2xl mt-4'>Third Federal Savings and Loan</h3>
            <hr className='w-1/6 border-slate-700' />
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Technical Project Manager <span className='font-medium text-lg'>(February 2021 - Present)</span></h4>
            <ul className='text-slate-900 list-disc'>
              <li className='ml-4'>Oversaw strategic operations of the Loan Origination System (LOS) product, including ownership of the vision statement, roadmap, and objectives and key results</li>
              <li className='ml-4'>Train colleagues and managers on agile development concepts (user stories, Kanban, culture change) and DevOps tools (Azure DevOps Server, Docker, Kubernetes, Git)</li>
              <li className='ml-4'>Managed projects corresponding to LOS roadmap goals including:</li>
              <ul className='list-circle ml-8'>
                <li>track developer velocity measured in days to deliver</li>
                <li>improve telemetry to proactively avoid production outages (using tools like Solarwinds Server Application Monitor and Splunk)</li>
                <li>enhance User Experience by reducing time to recover from issues and frequency of system errors</li>
                <li>measure Mean Time To Recover for system outages to identify areas to improve availability</li>
                <li>identify and document manual steps in the software lifecycle, automating where feasible (including inserting environment variables at runtime, migrating database changes, kicking off automated CI builds when kanban cards are moved from doing to done)</li>
              </ul>
              <li className='ml-4'>Led daily standups using Azure DevOps Boards (kanban) to track progress of individual work items and communicate status to business owners</li>
              <li className='ml-4'>Facilitated Sprint planning meetings according to our increment schedule (occurring every 1-3 weeks)</li>
              <li className='ml-4'>Conducted "SWAT" incident response teams for critical outages, creating ad hoc cross-functional teams tasked with restoring service to key applications within expected SLOs; key deliverables out of these incident response teams were to conduct blameless post-mortem analyses to create solutions to reduce the need for future manual intervention</li>
              <li className='ml-4'>Trained developers, sysadmins, and project managers on using Git, specifically with Azure DevOps Repos</li>
              <li className='ml-4'>Wrote and maintained wiki documentation site in Azure DevOps, all written in Markdown files; content included Agile and DevOps topics as well as information about the LOS product</li>
              <li className='ml-4'>Crafted alerts and actions in Splunk based on undesirable operating conditions detected from Windows and IIS logs which would trigger service or system restarts as needed</li>
              <li className='ml-4'>Created Kubernetes clusters on RHEL8 servers supporting development, testing, and production environments; applications included WordPress and .NET microservices applications</li>
            </ul>
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Network Engineer <span className='font-medium text-lg'>(December 2016 - February 2021)</span></h4>
            <ul className='text-slate-900 list-disc'>
              <li className='ml-4'>Implemented Forescout Counteract Network Access Control to automatically detect and classify every device connected to the internal corporate network; if a device did meet our security expectations and internal validation requirements it was removed from the network; this system replaced Cisco ISE</li>
              <li className='ml-4'>Updated and adjusted policies within Forescout Counteract as changes were required from management, audit results, and/or penetration test results or as other changes in the environment warranted (for example, changing VoIP vendors)</li>
              <li className='ml-4'>Automated switch and router configurations for Cisco and Juniper devices using Solarwinds Network Configuration Manager to quickly deploy hundreds or thousands of changes with minimal or zero manual configuration</li>
              <li className='ml-4'>Coordinated with telecom team to configure custom DHCP options and LLDP-MED policies for VoIP configuration and provisioning</li>
              <li className='ml-4'>Designed a secure VoIP network architecture that enabled SIP trunking through a Centurylink (now Lumen) voice network while also allowing inbound connections for softphones on cellphones and laptops via a direct internet connection, all while being completely isolated from our production network</li>
              <li className='ml-4'>Collaborated with desktop support teams to configure custom DHCP options and settings at the switch level to support Windows 10 PXE boot imaging in a Microsoft SCCM environment</li>
              <li className='ml-4'>Used OSPF, ACLs, and VLANs to isolate and segment all enterprise device types on their own networks including PC/workstations, printers, VoIP phones, security cameras, IoT devices, infrastructure management devices (UPS, PDU, etc), and servers to meet internal security requirements</li>
              <li className='ml-4'>Upgraded WAN connections for 50 remote branch locations from T1 to ethernet along with adding firewalls at each site</li>
              <li className='ml-4'>Overhauled core firewall zone and policy structure to be more flexible and maintainable; this project took several months of careful planning and analysis to ensure zero disruption to normal operations; ultimately it required rewriting 100s of policies which was safely done using a script in seconds</li>
              <li className='ml-4'>Taught lunch and learn sessions on Agile and DevOps topics including containers, Docker, Kubernetes, Git, application performance monitoring, Scrum, kanban, daily standups, blameless postmortems, and value stream mapping</li>
              <li className='ml-4'>Wrote documentation for systems supported including Forescout Counteract deployment, standard router and switch configurations, disaster recovery playbooks, VLAN numbering and device guide, required VoIP settings, and network segment definitions and architecture</li>
              <li className='ml-4'>Provided third level support for end-user (application), workstation, developer, telecom, DBA, server, mainframe, and security teams</li>
            </ul>
          </section>
          {/* Employer 2 Section */}
          <section>
            <h3 className='text-slate-700 text-2xl mt-4'>Bernie Moreno Companies</h3>
            <hr className='w-1/6 border-slate-700' />
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Network Administrator <span className='font-medium text-lg'>(October 2015 - December 2016)</span></h4>
            <ul className='text-slate-900 list-disc'>
              <li className='ml-4'>Sole network administrator, network engineer, and systems administrator for Bernie Moreno Companies, a collection of luxury automotive dealerships with a total of 12 major site locations located in Cleveland, OH, Cincinnati, OH, Boston, MA, and Miami, FL. Primary responsibility included management of all IT operations related to the everyday needs of the business</li>
              <li className='ml-4'>Upgraded and replaced old networking equipment with Cisco 3750 switch stacks at all sites</li>
              <li className='ml-4'>Replaced Sonicwall firewalls with Sophos UTM SG series firewalls at all sites</li>
              <li className='ml-4'>Wrote setup and configuration documentation for all Cisco and Sophos equipment</li>
              <li className='ml-4'>Configured all Cisco hardware for daily configuration backups to an FTP server, Sophos devices performed configuration backups using email</li>
              <li className='ml-4'>Redesigned network to more effectively utilize MPLS WAN connections, specifically related to optimal traffic flow for data and VoIP services, as well as configuring multi-site failover and high-availability; HA design utilized redundant Sophos UTM SGs in an active/passive pair and Cisco 3750 switch stacks in active/active configurations; HA was maintained using OSPF, IP SLA, and default route redistribution dynamically per a predefined route hierarchy</li>
              <li className='ml-4'>Managed Cisco ASA AnyConnect VPN for remote access; updated and modified configuration as needed, troubleshooting outages when they occurred</li>
              <li className='ml-4'>Migrated from an on-premise hosted VoIP service provider to a cloud hosted VoIP service provider, which required VoIP provisioning and QoS to be configured on our own equipment (previous system was configured and used entirely on the Service Provider’s network hardware)</li>
              <li className='ml-4'>Created custom QoS configuration to handle internal traffic classification for VoIP equipment and other services</li>
              <li className='ml-4'>Provisioned VoIP phones using LLDP-MED network policies and DHCP; QoS policies using DSCP were also created to properly mark softphone traffic from PCs, laptops, and smartphones at layer 3</li>
              <li className='ml-4'>Audited and documented all devices connected to the network, including PCs, printers, servers, routers, switches, firewalls, Wireless APs, and miscellaneous equipment</li>
              <li className='ml-4'>Monitored critical infrastructure by creating an Icinga server to send alerts on system status</li>
              <li className='ml-4'>Updated firmware on servers and network equipment within 30 days of availability</li>
              <li className='ml-4'>Virtualized physical servers to VMware ESXi VMs, including existing Domain Controllers and production file servers</li>
              <li className='ml-4'>Migrated existing Hyper-V hosts to VMware ESXi hosts to consolidate management</li>
              <li className='ml-4'>Added new Domain Controllers at each site to enhance and maintain HA requirements</li>
              <li className='ml-4'>Configured WDS deployment servers for imaging at each site, creating/updating images quarterly</li>
              <li className='ml-4'>Migrated file server from aging hardware to new virtual server with local redundant storage; utilized DFS-R to replicate and synchronize enterprise shares to a server at a remote site for HA</li>
              <li className='ml-4'>Configured Veeam Server Backup software to back up the file server to a third server nightly, maintaining 90 days of backup data</li>
              <li className='ml-4'>Conducted site surveys of the wireless access coverage at each site and manually optimized AP settings according to business requirements</li>
              <li className='ml-4'>Managed corporate email system using Office365, onboarding new users, deactivating or reassigning accounts for terminated employees, applying legal holds, and troubleshooting service outages</li>
              <li className='ml-4'>Used PowerShell to recover lost or accidentally deleted emails from Outlook 365 (Exchange Online)</li>
              <li className='ml-4'>Created Sharepoint sites and groups to modernize file share storage and access needs</li>
              <li className='ml-4'>Built Linux servers running mDNS/Avahi to enable iPads to use Airprint to print wirelessly at all sites</li>
              <li className='ml-4'>Developed PowerShell scripts and deployed them by GPO to remove all unlicensed copies of Microsoft Office from company-owned PCs, and replace them with our properly licensed Office 2016 software; These scripts were developed, tested, and successfully deployed in less than one week in response to an audit request from Microsoft; we passed our audit with no issues despite the time crunch</li>
            </ul>
          </section>
          {/* Employer 3 Section */}
          <section>
            <h3 className='text-slate-700 text-2xl mt-4'>Third Federal Savings and Loan</h3>
            <hr className='w-1/6 border-slate-700' />
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Network Engineer <span className='font-medium text-lg'>(June 2013 - October 2015)</span></h4>
            <ul className='text-slate-900 list-disc'>
              <li className='ml-4'>Lead network administrator and engineer for the Ohio State University Wooster Campus (comprising 10 large buildings and 35 small buildings)</li>
              <li className='ml-4'>Primary decision maker for all network hardware purchases</li>
              <li className='ml-4'>Named Project Manager for Campus Network Hardware Replacement Project in May 2013 and tasked to upgrade and replace over 100 switches for the Wooster Campus</li>
              <li className='ml-4'>Saved $150,000 by creating an efficient network architecture using Juniper EX Virtual Chassis instead of Cisco</li>
              <li className='ml-4'>Designed and implemented an OSPF routed core network using Juniper SRX firewalls and EX switches, while maintaining and migrating a non-routed multi-VLAN network running on Cisco Catalyst switches</li>
              <li className='ml-4'>Configured Juniper EX switches in a documented, uniform manner</li>
              <li className='ml-4'>Physically installed new hardware in network cabinets and racks</li>
              <li className='ml-4'>Maintained and updated Junos OS according to University standards</li>
              <li className='ml-4'>Designed and implemented OSPF routed virtual network (linked to our physical routing networks) using pfSense virtual firewall/routers in a VMware environment to support all of our virtual infrastructure</li>
              <li className='ml-4'>Maintained routine firewall operations on all campus firewalls, including Juniper SSG and SRX devices, and virtual pfSense firewalls</li>
              <li className='ml-4'>Designed and implemented custom security solutions for secure or highly-controlled networks (such as sensitive research/lab equipment that might pose organizational security risks); one example used an open source proxy to filter URLs on outbound traffic for a gene sequencer</li>
              <li className='ml-4'>Maintained and repaired Cisco Aironet Bridges to connect outlying buildings to the primary campus network</li>
              <li className='ml-4'>Initiated project to replace these Aironets with up to date Aruba access points and antennas; design requirements were completed upon my departure although purchase was pending final approval</li>
              <li className='ml-4'>Monitored and resolved all network problems as they occurred and provided performance metrics to management</li>
            </ul>
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Client Computing Services Coordinator <span className='font-medium text-lg'>(June 2013 - April 2014)</span></h4>
            <ul className='text-slate-900 list-disc'>
              <li className='ml-4'>Managed the Client Computing Services IT Division at the OSU Wooster Campus/OARDC, a small team of professional and student workers</li>
              <li className='ml-4'>Used an in-house ticketing system to monitor and resolve Help Desk and Desktop services requests in a timely and efficient manner</li>
              <li className='ml-4'>Resolved security vulnerabilities detected by Nessus scans within 30 days of discovery, per the University’s security standards</li>
              <li className='ml-4'>Acted as top-level technical support for any service requests that were escalated from the Help Desk or Desktop teams</li>
            </ul>
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Systems Specialist <span className='font-medium text-lg'>(January 2010 - June 2013)</span></h4>
            <ul className='text-slate-900 list-disc'>
              <li className='ml-4'>Primary PC technician responsible for fixing software and hardware problems with Windows XP, Vista, 7, and Mac OS X computers</li>
              <li className='ml-4'>Installed, configured, and repaired lab instrument PCs with highly specialized configurations</li>
              <li className='ml-4'>Used Microsoft Active Directory to create, modify, and remove Users, Groups, and Computers, including resetting user passwords, restricting logon access, and group management for file share and RADIUS server access</li>
              <li className='ml-4'>Used Microsoft DHCP server to create and monitor DHCP pools, add/remove MAC addresses to the Allow or Deny Filters, create DHCP reservations, and document used IP addresses in an Excel spreadsheet</li>
              <li className='ml-4'>Configured VLANs and switchports on Cisco Catalyst switches via telnet, SSH, or console port</li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}