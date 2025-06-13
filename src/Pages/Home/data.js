import { FaWhatsapp } from "react-icons/fa";
import { IoIosTime, IoIosTimer } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdPersonOutline } from "react-icons/md";
import { TbCheckupList, TbReport, TbReportMedical } from "react-icons/tb";

const homePageFeatures = [
  {
    title: "Book Home Sample Collection",
    icon: LiaCertificateSolid, // Pass the icon component
  },
  {
    title: "Upload Prescriptions",
    icon: IoIosTimer,
    path: "/upload-prescription",
  },
  {
    title: "WhatsApp Us",
    icon: FaWhatsapp,
    path: "https://wa.me/message/3PLMRNKV6LW4L1",
  },
  {
    title: "Download Reports",
    icon: TbReport,
    path: "/download-reports",
  },
  {
    title: "ECG At Home",
    desc: "",
    icon: TbReportMedical,
  },
  {
    title: "Sonography Appointment",
    icon: MdPersonOutline,
  },
];

const homePageBodyOrgans = [
  {
    title: "Heart",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Heart.png?width=256&q=75&format=webp",
  },
  {
    title: "Kidney",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Kidney.png?width=256&q=75&format=webp",
  },
  {
    title: "Liver",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Liver.png?width=256&q=75&format=webp",
  },
  {
    title: "Bone",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Bones.png?width=256&q=75&format=webp",
  },
  {
    title: "Vitamin",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Vitamin.png?width=256&q=75&format=webp",
  },
  {
    title: "Hormones",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Hormones.png?width=256&q=75&format=webp",
  },
  {
    title: "Gut Health",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/website/homepage/dweb/vital-organs/Gut+Health.webp?width=256&q=75&format=webp",
  },
  {
    title: "Blood",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Blood.png?width=256&q=75&format=webp",
  },
  {
    title: "Reproductive",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Checkup+categories/Colored/Reproductive+Organs.png?width=256&q=75&format=webp",
  },
  {
    title: "Gut Health",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/website/homepage/dweb/vital-organs/Gut+Health.webp?width=256&q=75&format=webp",
  },
  {
    title: "Blood",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Vital+Organs/Blood.png?width=256&q=75&format=webp",
  },
  {
    title: "Reproductive",
    Imagesrc:
      "https://d1wi3p9y2i20go.cloudfront.net/patient-app/10x-expirence/3X3+Checkup+categories/Colored/Reproductive+Organs.png?width=256&q=75&format=webp",
  },
];

const faqData = [
  {
    question: "Why should I use DR. PATHO?",
    answer:
      "DR. PATHO LAB can help you to cut your health checkup costs up to 60%. You do not need to wait for a long time in labs, simply choose Packages/Tests and book appointments online through our website. Blood samples will be collected from your home address. We will also email/WhatsApp the reports within 24 hrs on your email/WhatsApp mentioned while booking.",
  },
  // {
  //   question: "What are the services of DR. PATHO?",
  //   answer:
  //     "DR. PATHO LAB is a complete blood testing pathology lab, which provides 4000+ types of tests in association with NABL CAP & ISO accredited labs.",
  // },
  {
    question: "In which areas do you offer your services?",
    answer:
      "DR. PATHO provides services within Aurangabad and nearby villages.",
  },
  {
    question: "How can I avail the services of DR. PATHO?",
    answer:
      "Our services are just a few clicks away. Choose the appropriate package and click on the WhatsApp button. You will be redirected to DR. PATHO LAB's official WhatsApp number, where you can send your queries, test name, or prescription. You will then receive a call from DR. PATHO LAB for further process.",
  },
  {
    question: "Do you provide Free Home Sample Collection?",
    answer: "Yes, we provide FREE home sample collection in Aurangabad city.",
  },
  {
    question: "How can I make payment for booking?",
    answer:
      "On our website, click UPI payment options and scan the QR code. You can also make the payment by cash when our medical technician comes to collect the sample.",
  },
  {
    question: "Does DR. PATHO provide report collection?",
    answer:
      "DR. PATHO LAB provides the report via E-Mail/WhatsApp on the same day, within 24 hours, or as soon as possible depending on the test and turnaround time.",
  },
  {
    question: "Can I book for someone else?",
    answer:
      "You can book for yourself, family, and friends. There is no limitation on the number of people for whom you book tests.",
  },
  {
    question: "Can I change my booking?",
    answer: "Yes, you can change the booking before sample collection.",
  },
];

export { homePageFeatures, homePageBodyOrgans, faqData };
