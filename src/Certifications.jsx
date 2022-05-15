import CertificateOfCompletion_Balancing_Multiple_Roles_as_a_Leader_2 from "./assets/CertificateOfCompletion_Balancing_Multiple_Roles_as_a_Leader_2.pdf";
import CertificateOfCompletion_Content_Marketing_Foundations from "./assets/CertificateOfCompletion_Content_Marketing_Foundations.pdf";
import CertificateOfCompletion_Email_Marketing_Strategy_and_Optimization from "./assets/CertificateOfCompletion_Email_Marketing_Strategy_and_Optimization.pdf";
import CertificateOfCompletion_Google_Ads_Essential_Training from "./assets/Google_Essential.pdf";
import CertificateOfCompletion_Marketing_Tools_SEO_2019 from "./assets/CertificateOfCompletion_Marketing_Tools_SEO_2019.pdf";
import CertificateOfCompletion_Mobile_Marketing_Strategy from "./assets/CertificateOfCompletion_Mobile_Marketing_Strategy.pdf";

const Certifications = () => {
  const list = [
    {
      pdf: CertificateOfCompletion_Balancing_Multiple_Roles_as_a_Leader_2,
      name: "Balancing Multiple Roles as a Leader",
    },
    {
      pdf: CertificateOfCompletion_Content_Marketing_Foundations,
      name: "Content Marketing Foundations",
    },
    {
      pdf: CertificateOfCompletion_Email_Marketing_Strategy_and_Optimization,
      name: "Email Marketing Strategy and Optimization",
    },
    {
      pdf: CertificateOfCompletion_Google_Ads_Essential_Training,
      name: "Google Ads Essential Training",
    },
    {
      pdf: CertificateOfCompletion_Marketing_Tools_SEO_2019,
      name: "Marketing Tools SEO 2019",
    },
    {
      pdf: CertificateOfCompletion_Mobile_Marketing_Strategy,
      name: "Mobile Marketing Strategy",
    },
  ];
  return (
    <div className="flex justify-center items-center pt-24 vh-800:h-screen vh-800:pt-0 fadeInBottomSm">
      <section className="mb-5">
        <h2 className="text-5xl font-bold mb-[50px] text-center">
          Certifications
        </h2>
        <ul className="flex max-w-[400px] mx-auto flex-col gap-3">
          <For each={list}>
            {(item) => {
              return (
                <li>
                  <a
                    class="border-2 border-black rounded-lg border-solid px-4 py-2 block text-center  transition-all hover:bg-black hover:text-white shadow-brutal-blue hover:drop-shadow-brutal-orange"
                    href={item.pdf}
                    target="_blank"
                  >
                    {item.name}
                  </a>
                </li>
              );
            }}
          </For>
        </ul>
      </section>
    </div>
  );
};

export default Certifications;
