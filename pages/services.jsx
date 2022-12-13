import React from "react";
import styles from "../styles/Service.module.css";

import Service_Offer from "../component/Service_Offer";
import Snapshot_Img from "../component/Snapshot_Img";
import Snapshot_Content from "../component/Snapshot_Content";
import Team_Item from "../component/Team_Item";
import Bar from "../component/Bar";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function service() {
  return (
    <section className="service_section">
      <Bar title="Services"></Bar>
      <div className={styles.service_header}>
        <div className={styles.service_heading}>Our Solutions</div>
        <div className={styles.service_intro}>
          Exceptional <span>kubernetes </span> services tailored to your needs
        </div>
        <div className={styles.service_desc}>
          Our first-class experts provide services in consulting, implementation
          and technical support to help our clients take full advantage of
          Kubernetes
        </div>
      </div>
      <div className={styles.service_offer_block}>
        <div className={styles.service_offer_heading}>
          <span>Services</span> Offerings
        </div>
        <div className={styles.service_offer_container}>
          <Service_Offer
            src="/service1.png"
            title="Architecture"
            content="We work with you to define strategies and select the right services for your business needs and objectives. Together, we’ll build a roadmap to pilot and deploy Kubernetes according to your current systems. Included are an architecture assessment and design consultation for business-critical applications. Trust us for highly secured, scalable and cost-effective solutions based on Kubernetes."
          ></Service_Offer>
          <Service_Offer
            src="/service2.png"
            title="Deployment"
            content="An application production via legacy software may be long-running and require lots of cumbersome and routine checks, configurations and fixes. AgileOps' deployment services help automate repetitive tasks and make tons of manual work a hassle-free breeze through deployment, scaling, and update management. By automating the launch of pod instances, we will help you achieve the supreme performance boost."
          ></Service_Offer>
          <Service_Offer
            src="/service3.png"
            title="Security"
            content="Our security-first approach means that your Kubernetes environments will be hardened and built with best practices in mind to defend against common attacks and emerging threats. We have deep experience with various common cybersecurity frameworks such as HIPAA, GPDR, ISO 27001, SOCS and government-wide compliance programs such as FedRAMP and PCI-DSS. For existing installations, we also carry out security reviews to prevent external influences on your system."
          ></Service_Offer>
          <Service_Offer
            src="/service4.png"
            title="Migration"
            content="Making the transition from legacy systems on-premises or other Cloud to run on Kubernetes can be a daunting challenge. But it doesn’t have to be. We customize our migration services to your needs – from simple moves into containers to full-scale migrations from virtual machines onto mature Kubernetes clusters. We will save you time, effort and a lot of uncertainty & doubt."
          ></Service_Offer>
          <Service_Offer
            src="/service5.png"
            title="Managed Services"
            content="We can build and run your Kubernetes infrastructure on AWS (EKS) and Google Cloud (GKE) or on-premise virtualization (Proxmox). You can focus on your applications without worrying about the complexity associated with deploying, operating and managing Kubernetes clusters. We will ensure you have the observability tooling, skills, and lifecycle management processes in place."
          ></Service_Offer>
          <Service_Offer
            src="/service6.png"
            title="Troubleshooting"
            content="If problems with the Kubernetes set-up occur, help not only needs to be provided quickly but it also must be targeted and employ the required expertise. They detect possible issues before those affect your business, providing 24/7 business continuity, data integrity, and zero-disruption upgrades. Our technical support engineers go above and beyond to make sure that you are worry-free."
          ></Service_Offer>
        </div>
      </div>
      <div className={styles.service_snapshot_block}>
        <div className={styles.service_snapshot_title}>
          A <span>snapshot</span> of what we have <span>achieved</span> for our
          clients
        </div>
        <div className={styles.service_snapshot_container}>
          <Snapshot_Img
            bgColor="transparent"
            src="/snapshot1.png"
          ></Snapshot_Img>
          <Snapshot_Content
            ta="left"
            content="The client engaged AgileOps to deploy an Atlassian Data Center environment in the client’s FedRAMP-compliant GCP environment and to install and configure Jira and Confluence applications according to industry best practices. Key deliverables included design, deployment, implementation, installation, configuration and testing. We ensured all prerequisites in terms of system requirements and environment setup were met. Next, we carried out the installation and configuration of applications, including an Nginx Ingress Controller, an SSL/TLS Certificate Manager, Jira Data Center, persistent storage, database. We also implemented horizontal scaling of the product. All in all, the Data Center was deployed with ease and efficiency, and the client was extremely appreciative of our professionalism and expertise."
          >
            Fedramp <span>Atlassian</span> Data Center Deployment
          </Snapshot_Content>

          <Snapshot_Content
            ta="right"
            content="The client engaged AgileOps to build an elastic scaler for their professional live streaming service. The solution was to be capable of supporting millions of simultaneous viewers for one streamer while also being able to scale deployments down to fit the current load. The audience can also share the stream to other platforms such as Zoom, LinkedIn, and Google Meet. We built the infrastructure on AWS and leveraged the Amazon Elastic Kubernetes Service (EKS) as the foundation for our solution. The scaler included an Nginx Ingress Controller, an SSL/TLS Certificate Manager, an AWS Aurora database, a MediaSoup server, AWS EFS and EBS persistent storage, and a Helm chart. As the cherry on top, we included horizontal scaling with HPA and cluster autoscaler, and continuous deployment with GitOps using ArgoCD. In the end, the scaler exceeded the client’s expectations and continues to bring immense value to the end users.."
          >
            <span> WebRTC</span> Streaming Service Auto-Scaling Deployment
          </Snapshot_Content>
          <Snapshot_Img
            bgColor="rgba(12, 28, 70, 0.8)"
            src="/snapshot2.png"
          ></Snapshot_Img>
          <Snapshot_Img
            bgColor="transparent"
            src="/snapshot3.png"
          ></Snapshot_Img>
          <Snapshot_Content
            ta="left"
            content="The client was operating an automation testing framework and engaged AgileOps to build a system which can support the scaling of a million tests in parallel. This event-driven autoscaling solution extends the feature set of K8S’ HPA and scales Selenium browser nodes based on the number of requests waiting in the session queue. We built the infrastructure on AWS and leveraged the Amazon Elastic Kubernetes Service (EKS) as the foundation for our solution. The scaler included an Nginx Ingress Controller, a Selenium Grid 4 proxy server, a combination of On-Demand and Spot instances for cost optimization, and a solution to record testing videos per session and upload them to S3 for storage. Scaling by the number of tests in queue with the testing framework was done by combining with the cluster autoscaler. The scaler works perfectly at massive scale, and the client was extremely happy with the end result."
          >
            <span> Selenium</span> auto-scaling testing framework
          </Snapshot_Content>
        </div>
      </div>
      <div className={styles.service_experts_block}>
        <div className={styles.service_experts_title}>
          Our
          <span> Kurbernate</span> Experts
        </div>
        <div className={styles.service_experts_content}>
          <div className={styles.service_experts_intro}>
            <span> Our DevSecOps Lead Minh Luu </span>
            is a Certified Kubernetes Administrator and AWS Certified DevOps
            Engineer, and has delivered over 20,000 hours of AWS/DevOps services
            on Upwork.
          </div>
          <div className={styles.service_experts_intro}>
            <span>Our CEO Kiet Ngo </span>
            is a AWS-certified Engineer in Solution Architect, DevOps and
            Security/Network, and has delivered over 9,000 hours of AWS/DevOps
            services on Upwork.
          </div>
        </div>
        <div className="service_experts_container_wrap">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <Team_Item
              none="true"
              url="/Rectangle708.png"
              name="Thao Vu"
              desc="Mobile Guru"
            ></Team_Item>
            <Team_Item
              none="true"
              url="/Rectangle709.png"
              name="Quang Nguyen"
              desc="Web Wizard"
            ></Team_Item>
            <Team_Item
              none="true"
              url="/Rectangle702.png"
              name="Kiet Ngo"
              desc="AgileOps Lead"
            ></Team_Item>
            <Team_Item
              none="true"
              url="/Rectangle704.png"
              name="Minh Luu"
              desc="DevOps Practitioner"
            ></Team_Item>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
