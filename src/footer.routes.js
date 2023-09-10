// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "pages/components/MKTypography";

// Images
import logoLogistics from "assets/images/imex.png"; // Replace with the path to your logistics company's logo

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Imes Cargo",
    image: logoLogistics,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/",
    },
  ],
  menus: [
    {
      name: "services",
      items: [
        { name: "freight forwarding", route: "/services/freight-forwarding" },
        { name: "warehousing", route: "/services/warehousing" },
        { name: "distribution", route: "/services/distribution" },
        { name: "supply chain solutions", route: "/services/supply-chain" },
      ],
    },
    {
      name: "company",
      items: [
        { name: "about us", route: "/about" },
        { name: "careers", route: "/careers" },
        { name: "testimonials", route: "/testimonials" },
        { name: "blog", route: "/blog" },
      ],
    },
    {
      name: "support",
      items: [
        { name: "faq", route: "/faqs" },
        { name: "contact us", route: "/contact" },
        { name: "knowledge center", route: "/knowledge-center" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", route: "/terms-conditions" },
        { name: "privacy policy", route: "/privacy-policy" },
        { name: "licenses", route: "/licenses" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Imex Cargo
    </MKTypography>
  ),
};
