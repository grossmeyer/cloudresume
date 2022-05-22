import CustomHead from '../components/CustomHead.js'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <CustomHead headTitle='Cloud Resume - Glenn Meyer' headDescription="Glenn Meyer's Cloud Resume" />
      <Layout />
      <main className='flex flex-col md:flex-row justify-center mt-5 font-main'>
        <aside className='md:sticky top-32 w-1/8 h-full mt-12 md:ml-4 py-4 px-8 bg-sky-700 shadow-xl'>
          {/* Profile Picture */}
          <section className='flex items-center justify-center mb-10'>
            <img src='avatar.webp' alt='Stylized avatar of Glenn Meyer' width='128' height='139' className='w-32' />
          </section>
          {/* Contact Section */}
          <section className='text-slate-100'>
            <h2 className='uppercase tracking-widest text-lg font-bold'>
              Contact
            </h2>
            <hr className='mb-5 w-1/6' />
            <p className='md:text-sm text-lg hover:text-sky-300 mb-2'><a href='mailto:glenn@glennmeyer.dev'>glenn@glennmeyer.dev</a></p>
            <section className='flex flex-row'>
              <a href='https://www.linkedin.com/in/glenn-meyer-93a58583/' aria-label='Connect with Glenn on LinkedIn'>
                <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' className='mt-1 mr-4 hover:bg-sky-300 rounded-xl'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' /></svg>
              </a>
              <a href='https://www.twitter.com/grossmeyer' aria-label='Connect with Glenn on Twitter'>
                <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' className='mt-1 mr-4 hover:bg-sky-300 rounded-xl'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' /></svg>
              </a>
              <a href='https://github.com/grossmeyer' aria-label="Check out Glenn's source code on GitHub">
                <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' className='mt-1 mr-4 hover:bg-sky-300 rounded-full'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></svg>
              </a>
            </section>
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
        <article className='md:w-7/12 w-auto h-auto p-10'>
          <h1 className='text-sky-800 text-3xl font-semibold'>Glenn Meyer</h1>
          <p>Change Agent driving organizations towards agile development, cloud computing, automation, and embracing DevOps philosophy</p>
          <h2 className='font-semibold uppercase tracking-wider mt-6 mb-2 text-slate-500 text-2xl'>Professional Experience</h2>
          {/* Employer 1 Section */}
          <section>
            <h3 className='text-slate-700 text-2xl mt-4'>Fortune Brands Water Innovations - Moen, Inc.</h3>
            <hr className='w-1/6 border-slate-700' />
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Lead Infrastructure Architect <span className='font-medium text-lg'>(March 2022 - Present)</span></h4>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Windows Server 2012, 2016, 2019, and 2022</li>
              <li>SUSE Linux 11, 12, and 15</li>
              <li>Git/Github Administration</li>
              <li>Ansible and Ansible-Playbook</li>
              <li>F5 BIG-IP Load Balancer</li>
              <li>Cisco Networking (Catalyst, Nexus, WLC, and ASA)</li>
              <li>Fortinet Fortigate</li>
              <li>PRTG Monitoring</li>
            </ul>
          </section>
          {/* Employer 2 Section */}
          <section>
            <h3 className='text-slate-700 text-2xl mt-4'>Third Federal Savings and Loan</h3>
            <hr className='w-1/6 border-slate-700' />
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Technical Project Manager <span className='font-medium text-lg'>(February 2021 - Present)</span></h4>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Oversaw strategic operations of the Loan Origination System (LOS) product, including ownership of the vision statement, roadmap, and objectives and key results</li>
              <li>Train colleagues and managers on agile development concepts (user stories, Kanban, culture change) and DevOps tools (Azure DevOps Server, Docker, Kubernetes, Git)</li>
              <li>Managed projects corresponding to LOS roadmap goals including:</li>
            </ul>
            <ul className='list-circle text-slate-900 ml-8'>
              <li>track developer velocity measured in days to deliver</li>
              <li>improve telemetry to proactively avoid production outages (using tools like Solarwinds Server Application Monitor and Splunk)</li>
              <li>enhance User Experience by reducing time to recover from issues and frequency of system errors</li>
              <li>measure Mean Time To Recover for system outages to identify areas to improve availability</li>
              <li>identify and document manual steps in the software lifecycle, automating where feasible (including inserting environment variables at runtime, migrating database changes, kicking off automated CI builds when kanban cards are moved from doing to done)</li>
            </ul>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Led daily standups using Azure DevOps Boards (kanban) to track progress of individual work items and communicate status to business owners</li>
              <li>Facilitated Sprint planning meetings according to our increment schedule (occurring every 1-3 weeks)</li>
              <li>Conducted "SWAT" incident response teams for critical outages, creating ad hoc cross-functional teams tasked with restoring service to key applications within expected SLOs; key deliverables out of these incident response teams were to conduct blameless post-mortem analyses to create solutions to reduce the need for future manual intervention</li>
              <li>Trained developers, sysadmins, and project managers on using Git, specifically with Azure DevOps Repos</li>
              <li>Wrote and maintained wiki documentation site in Azure DevOps, all written in Markdown files; content included Agile and DevOps topics as well as information about the LOS product</li>
              <li>Crafted alerts and actions in Splunk based on undesirable operating conditions detected from Windows and IIS logs which would trigger service or system restarts as needed</li>
              <li>Created Kubernetes clusters on RHEL8 servers supporting development, testing, and production environments; applications included WordPress and .NET microservices applications</li>
            </ul>
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Network Engineer <span className='font-medium text-lg'>(December 2016 - February 2021)</span></h4>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Implemented Forescout Counteract Network Access Control to automatically detect and classify every device connected to the internal corporate network; if a device did meet our security expectations and internal validation requirements it was removed from the network; this system replaced Cisco ISE</li>
              <li>Updated and adjusted policies within Forescout Counteract as changes were required from management, audit results, and/or penetration test results or as other changes in the environment warranted (for example, changing VoIP vendors)</li>
              <li>Automated switch and router configurations for Cisco and Juniper devices using Solarwinds Network Configuration Manager to quickly deploy hundreds or thousands of changes with minimal or zero manual configuration</li>
              <li>Coordinated with telecom team to configure custom DHCP options and LLDP-MED policies for VoIP configuration and provisioning</li>
              <li>Designed a secure VoIP network architecture that enabled SIP trunking through a Centurylink (now Lumen) voice network while also allowing inbound connections for softphones on cellphones and laptops via a direct internet connection, all while being completely isolated from our production network</li>
              <li>Collaborated with desktop support teams to configure custom DHCP options and settings at the switch level to support Windows 10 PXE boot imaging in a Microsoft SCCM environment</li>
              <li>Used OSPF, ACLs, and VLANs to isolate and segment all enterprise device types on their own networks including PC/workstations, printers, VoIP phones, security cameras, IoT devices, infrastructure management devices (UPS, PDU, etc), and servers to meet internal security requirements</li>
              <li>Upgraded WAN connections for 50 remote branch locations from T1 to ethernet along with adding firewalls at each site</li>
              <li>Overhauled core firewall zone and policy structure to be more flexible and maintainable; this project took several months of careful planning and analysis to ensure zero disruption to normal operations; ultimately it required rewriting 100s of policies which was safely done using a script in seconds</li>
              <li>Taught lunch and learn sessions on Agile and DevOps topics including containers, Docker, Kubernetes, Git, application performance monitoring, Scrum, kanban, daily standups, blameless postmortems, and value stream mapping</li>
              <li>Wrote documentation for systems supported including Forescout Counteract deployment, standard router and switch configurations, disaster recovery playbooks, VLAN numbering and device guide, required VoIP settings, and network segment definitions and architecture</li>
              <li>Provided third level support for end-user (application), workstation, developer, telecom, DBA, server, mainframe, and security teams</li>
            </ul>
          </section>
          {/* Employer 3 Section */}
          <section>
            <h3 className='text-slate-700 text-2xl mt-4'>Bernie Moreno Companies</h3>
            <hr className='w-1/6 border-slate-700' />
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Network Administrator <span className='font-medium text-lg'>(October 2015 - December 2016)</span></h4>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Sole network administrator, network engineer, and systems administrator for Bernie Moreno Companies, a collection of luxury automotive dealerships with a total of 12 major site locations located in Cleveland, OH, Cincinnati, OH, Boston, MA, and Miami, FL. Primary responsibility included management of all IT operations related to the everyday needs of the business</li>
              <li>Upgraded and replaced old networking equipment with Cisco 3750 switch stacks at all sites</li>
              <li>Replaced Sonicwall firewalls with Sophos UTM SG series firewalls at all sites</li>
              <li>Wrote setup and configuration documentation for all Cisco and Sophos equipment</li>
              <li>Configured all Cisco hardware for daily configuration backups to an FTP server, Sophos devices performed configuration backups using email</li>
              <li>Redesigned network to more effectively utilize MPLS WAN connections, specifically related to optimal traffic flow for data and VoIP services, as well as configuring multi-site failover and high-availability; HA design utilized redundant Sophos UTM SGs in an active/passive pair and Cisco 3750 switch stacks in active/active configurations; HA was maintained using OSPF, IP SLA, and default route redistribution dynamically per a predefined route hierarchy</li>
              <li>Managed Cisco ASA AnyConnect VPN for remote access; updated and modified configuration as needed, troubleshooting outages when they occurred</li>
              <li>Migrated from an on-premise hosted VoIP service provider to a cloud hosted VoIP service provider, which required VoIP provisioning and QoS to be configured on our own equipment (previous system was configured and used entirely on the Service Provider’s network hardware)</li>
              <li>Created custom QoS configuration to handle internal traffic classification for VoIP equipment and other services</li>
              <li>Provisioned VoIP phones using LLDP-MED network policies and DHCP; QoS policies using DSCP were also created to properly mark softphone traffic from PCs, laptops, and smartphones at layer 3</li>
              <li>Audited and documented all devices connected to the network, including PCs, printers, servers, routers, switches, firewalls, Wireless APs, and miscellaneous equipment</li>
              <li>Monitored critical infrastructure by creating an Icinga server to send alerts on system status</li>
              <li>Updated firmware on servers and network equipment within 30 days of availability</li>
              <li>Virtualized physical servers to VMware ESXi VMs, including existing Domain Controllers and production file servers</li>
              <li>Migrated existing Hyper-V hosts to VMware ESXi hosts to consolidate management</li>
              <li>Added new Domain Controllers at each site to enhance and maintain HA requirements</li>
              <li>Configured WDS deployment servers for imaging at each site, creating/updating images quarterly</li>
              <li>Migrated file server from aging hardware to new virtual server with local redundant storage; utilized DFS-R to replicate and synchronize enterprise shares to a server at a remote site for HA</li>
              <li>Configured Veeam Server Backup software to back up the file server to a third server nightly, maintaining 90 days of backup data</li>
              <li>Conducted site surveys of the wireless access coverage at each site and manually optimized AP settings according to business requirements</li>
              <li>Managed corporate email system using Office365, onboarding new users, deactivating or reassigning accounts for terminated employees, applying legal holds, and troubleshooting service outages</li>
              <li>Used PowerShell to recover lost or accidentally deleted emails from Outlook 365 (Exchange Online)</li>
              <li>Created Sharepoint sites and groups to modernize file share storage and access needs</li>
              <li>Built Linux servers running mDNS/Avahi to enable iPads to use Airprint to print wirelessly at all sites</li>
              <li>Developed PowerShell scripts and deployed them by GPO to remove all unlicensed copies of Microsoft Office from company-owned PCs, and replace them with our properly licensed Office 2016 software; These scripts were developed, tested, and successfully deployed in less than one week in response to an audit request from Microsoft; we passed our audit with no issues despite the time crunch</li>
            </ul>
          </section>
          {/* Employer 4 Section */}
          <section>
            <h3 className='text-slate-700 text-2xl mt-4'>Third Federal Savings and Loan</h3>
            <hr className='w-1/6 border-slate-700' />
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Network Engineer <span className='font-medium text-lg'>(June 2013 - October 2015)</span></h4>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Lead network administrator and engineer for the Ohio State University Wooster Campus (comprising 10 large buildings and 35 small buildings)</li>
              <li>Primary decision maker for all network hardware purchases</li>
              <li>Named Project Manager for Campus Network Hardware Replacement Project in May 2013 and tasked to upgrade and replace over 100 switches for the Wooster Campus</li>
              <li>Saved $150,000 by creating an efficient network architecture using Juniper EX Virtual Chassis instead of Cisco</li>
              <li>Designed and implemented an OSPF routed core network using Juniper SRX firewalls and EX switches, while maintaining and migrating a non-routed multi-VLAN network running on Cisco Catalyst switches</li>
              <li>Configured Juniper EX switches in a documented, uniform manner</li>
              <li>Physically installed new hardware in network cabinets and racks</li>
              <li>Maintained and updated Junos OS according to University standards</li>
              <li>Designed and implemented OSPF routed virtual network (linked to our physical routing networks) using pfSense virtual firewall/routers in a VMware environment to support all of our virtual infrastructure</li>
              <li>Maintained routine firewall operations on all campus firewalls, including Juniper SSG and SRX devices, and virtual pfSense firewalls</li>
              <li>Designed and implemented custom security solutions for secure or highly-controlled networks (such as sensitive research/lab equipment that might pose organizational security risks); one example used an open source proxy to filter URLs on outbound traffic for a gene sequencer</li>
              <li>Maintained and repaired Cisco Aironet Bridges to connect outlying buildings to the primary campus network</li>
              <li>Initiated project to replace these Aironets with up to date Aruba access points and antennas; design requirements were completed upon my departure although purchase was pending final approval</li>
              <li>Monitored and resolved all network problems as they occurred and provided performance metrics to management</li>
            </ul>
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Client Computing Services Coordinator <span className='font-medium text-lg'>(June 2013 - April 2014)</span></h4>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Managed the Client Computing Services IT Division at the OSU Wooster Campus/OARDC, a small team of professional and student workers</li>
              <li>Used an in-house ticketing system to monitor and resolve Help Desk and Desktop services requests in a timely and efficient manner</li>
              <li>Resolved security vulnerabilities detected by Nessus scans within 30 days of discovery, per the University’s security standards</li>
              <li>Acted as top-level technical support for any service requests that were escalated from the Help Desk or Desktop teams</li>
            </ul>
            <h4 className='text-slate-800 font-semibold text-xl mt-4'>Systems Specialist <span className='font-medium text-lg'>(January 2010 - June 2013)</span></h4>
            <ul className='list-disc text-slate-900 ml-4'>
              <li>Primary PC technician responsible for fixing software and hardware problems with Windows XP, Vista, 7, and Mac OS X computers</li>
              <li>Installed, configured, and repaired lab instrument PCs with highly specialized configurations</li>
              <li>Used Microsoft Active Directory to create, modify, and remove Users, Groups, and Computers, including resetting user passwords, restricting logon access, and group management for file share and RADIUS server access</li>
              <li>Used Microsoft DHCP server to create and monitor DHCP pools, add/remove MAC addresses to the Allow or Deny Filters, create DHCP reservations, and document used IP addresses in an Excel spreadsheet</li>
              <li>Configured VLANs and switchports on Cisco Catalyst switches via telnet, SSH, or console port</li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}