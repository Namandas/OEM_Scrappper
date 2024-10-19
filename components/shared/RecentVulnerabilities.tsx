'use client'
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import axios from 'axios';

// const vulnerabilities = [
//   {
//     id: 'cisco-sa-cslu-7gHMzWmw',
//     title: 'Cisco Smart Licensing Utility Vulnerabilities',
//     released: '2024-09-04T16:00:00.000+0000',
//     updated: '2024-09-04T16:00:00.000+0000',
//     description: 'Multiple vulnerabilities in Cisco Smart Licensing Utility...',
//     link: 'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cslu-7gHMzWmw',
//   },
//   {
//     id: 'cisco-sa-cslu-7gHMzWmw',
//     title: 'Cisco Smart Licensing Utility Vulnerabilities',
//     released: '2024-09-04T16:00:00.000+0000',
//     updated: '2024-09-04T16:00:00.000+0000',
//     description: 'Multiple vulnerabilities in Cisco Smart Licensing Utility...',
//     link: 'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cslu-7gHMzWmw',
//   },
//   {
//     id: 'cisco-sa-cslu-7gHMzWmw',
//     title: 'Cisco Smart Licensing Utility Vulnerabilities',
//     released: '2024-09-04T16:00:00.000+0000',
//     updated: '2024-09-04T16:00:00.000+0000',
//     description: 'Multiple vulnerabilities in Cisco Smart Licensing Utility...',
//     link: 'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cslu-7gHMzWmw',
//   },
//   {
//     id: 'cisco-sa-cslu-7gHMzWmw',
//     title: 'Cisco Smart Licensing Utility Vulnerabilities',
//     released: '2024-09-04T16:00:00.000+0000',
//     updated: '2024-09-04T16:00:00.000+0000',
//     description: 'Multiple vulnerabilities in Cisco Smart Licensing Utility...',
//     link: 'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cslu-7gHMzWmw',
//   },
//   {
//     id: 'cisco-sa-cslu-7gHMzWmw',
//     title: 'Cisco Smart Licensing Utility Vulnerabilities',
//     released: '2024-09-04T16:00:00.000+0000',
//     updated: '2024-09-04T16:00:00.000+0000',
//     description: 'Multiple vulnerabilities in Cisco Smart Licensing Utility...',
//     link: 'https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-cslu-7gHMzWmw',
//   }
// ];




const RecentVulnerabilities = () => {
  const [vulnerabilities,setvulnerabilities] = useState([
    {
      vendor: "Cisco",
      id: "cisco-sa-ucsc-bkpsky-TgJ5f73J",
      title: "Cisco UCS Central Software Configuration Backup Information Disclosure Vulnerability",
      released: "2024-10-16 16:00:00",
      updated: "2024-10-16 16:00:00",
      description: "A vulnerability in the backup feature of Cisco UCS Central Software could allow an attacker with access to a backup file to learn sensitive information that is stored in the full state and configuration backup files.This vulnerability is due to a weakness in the encryption method that ",
      link: "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ucsc-bkpsky-TgJ5f73J"
    },
    {
      vendor: "Cisco",
      id: "cisco-sa-ucsc-bkpsky-TgJ5f73J",
      title: "Cisco UCS Central Software Configuration Backup Information Disclosure Vulnerability",
      released: "2024-10-16 16:00:00",
      updated: "2024-10-16 16:00:00",
      description: "A vulnerability in the backup feature of Cisco UCS Central Software could allow an attacker with access to a backup file to learn sensitive information that is stored in the full state and configuration backup files.This vulnerability is due to a weakness in the encryption method that ",
      link: "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ucsc-bkpsky-TgJ5f73J"
    }])
    useEffect(() => {
      let data = JSON.stringify({
        "vendor": "",
        "limit": 10
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://vulndb.onrender.com/vulnerabilities/list',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(response.data);
        setvulnerabilities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Recent Vulnerabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vulnerabilities.map((vuln) => (
              <div key={vuln.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">{vuln.title}</h3>
                <p className="text-sm text-gray-500 mb-4">Released: {new Date(vuln.released).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500 mb-4">Updated: {new Date(vuln.updated).toLocaleDateString()}</p>
                <p className="text-gray-700 mb-4">{(vuln.description?vuln.description.substring(0, 100) : 'No Description Provided')}...</p>
                <a
                  href={vuln.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-600 font-semibold underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default RecentVulnerabilities;
  
