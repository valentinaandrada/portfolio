import { motion } from "motion/react";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { fadeInUp } from "../utils/motionConfig";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const {t} = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('form.validation.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t("form.validation.emailRequired");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = t("form.validation.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("form.validation.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    console.log("Form Data Submitted: ", formData);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Valentina",
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setFormStatus(
          "Thank you for your message, I will get back to you in two days max!"
        );
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 6000);
      });

    setFormData({ name: "", email: "", message: "" }); 
    setErrors({});
  };

  return (
    <motion.div {...fadeInUp}>
      <section className="md:max-h-screen md:flex overflow-hidden ">
        <div className="flex-1 flex-col justify-center md:mt-[180px] md:pr-16 md:mb-16 overflow-auto scrollbar-hide">
          <h2 className="h2 mb-6">{t('headings.contact')}</h2>

          {/* Contact Form */}
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('form.fields.name')}
                className="w-full focus:outline-none p-2 text-sm tracking-normal dark:bg-darkSecondary/10"
              />
              {errors.name && (
                <p className="text-accent dark:text-darkAccent text-xs my-2">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('form.fields.email')}
                className="w-full focus:outline-none p-2 text-sm tracking-normal dark:bg-darkSecondary/10"
              />
              {errors.email && (
                <p className=" text-accent dark:text-darkAccent text-xs my-2">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('form.fields.message')}
                className="w-full focus:outline-none p-2 text-sm tracking-normal dark:bg-darkSecondary/10"
                rows="5"
              />
              {errors.message && (
                <p className="text-accent dark:text-darkAccent text-xs mb-2">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="text-accent dark:text-darkAccent font-medium tracking-wide hover:font-semibold"
              >
                {t('form.buttons.send')}
              </button>
            </div>
          </form>

          {/* Popup Alert */}
          {showPopup && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 p-4 bg-overlay-light dark:bg-overlay-dark dark:text-darkSecondary">
              <p className="text-sm">{formStatus}</p>
            </div>
          )}

          {/* Contact Info */}
          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-2 text-base dark:text-neutral-500">
              <CiMail size={20} color="grey" />
              <a
                href="mailto:valentinaandradazan@gmail.com"
                className=" text-sm font-light tracking-tight hover:font-normal"
                aria-label="Email"
              >
                valentinaandradazan@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-base dark:text-neutral-500">
              <VscGithubAlt size={20} color="grey" />
              <a
                href="https://github.com/valentinaandrada"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sm font-light tracking-tight hover:font-normal"
                aria-label="Github"
              >
                github
              </a>
            </div>
            <div className="flex items-center gap-2 text-base dark:text-neutral-500">
              <SlSocialLinkedin size={20} color="grey" />
              <a
                href="https://www.linkedin.com/in/valentinaandrada/"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sm font-light tracking-tight hover:font-normal"
                aria-label="LinkedIn"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
