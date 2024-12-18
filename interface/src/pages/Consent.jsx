import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { purple, banner, scroll, feather } from "../assets";
import "../styles/fonts.css";
import * as Components from "../components";

export const Consent = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = () => {
    if (checked) {
      navigate("/introduction");
    } else {
      alert("Please give your consent to proceed");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${purple})` }}
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center px-14 py-12"
    >
      <div
        style={{
          backgroundImage: `url(${banner})`,
          width: "400px",
          height: "110px",
        }}
        alt="Banner"
        className="bg-cover absolute top-0 left-1/2 -translate-x-1/2 text-white jaini-purva text-3xl pt-5 flex items-start justify-center"
      >
        CONSENT FORM
      </div>

      <div
        style={{
          backgroundImage: `url(${scroll})`,
        }}
        className="bg-contain bg-no-repeat bg-center w-full h-full animate-growFromCenter py-[15vh] px-[8vw] lg:px-[10vw] xl:px-[13vw] 2xl:px-[19vw]"
      >
        <div className="w-full h-full overflow-y-auto text-purple opacity-0 animate-fadeIn">
          <p className="mb-2">
            Researchers at the University of Toronto are studying how people’s
            usage of Artificial Intelligence impacts their creative thinking
            abilities. Nowadays, people are often offloading tedious cognitive
            tasks to various AI tools to boost productivity and save time. Our
            project investigates the implications this has on human creativity.
          </p>
          <p className="mb-2">
            You are invited to participate in this study if you are at least 18
            years of age. As a participant, you will be asked to come up with
            alternative methods of utilizing common household items besides
            their intended use. You will also be asked to provide some
            demographic information and general thoughts on this survey. By
            taking part, you will help us better understand how we can guide
            responsible AI development and usage.
          </p>
          <p className="mb-2">
            There are no potential risks or preparatory requirements for
            completing the study. We will have mechanisms in place to ensure
            that information collected during the study will be kept separate
            from identification, and not disclosed to anyone besides those named
            below. No personally identifiable information will be collected.
          </p>
          <p className="mb-2">
            We expect the survey to take around 10 minutes to complete. If you
            are a Prolific worker, you will receive the monetary amount detailed
            on Prolific as compensation for your time. If you were recruited
            offline, you will be entered into a draw for 5 USD Amazon gift
            cards. Odds are detailed in the advertisement post, but you can
            expect a winning probability of at least 30%.
          </p>
          <p className="mb-2">
            As the results of this evaluation will be of interest to a wide
            number of communities, we are asking your permission to include your
            data in any reports that we publish, in a de-identified, aggregated
            format. Your participation in this research study is voluntary. If
            you do not give consent, you will not be asked to participate any
            further and your results will not be part of the de-identified data
            used for any published reports.
          </p>
          <p className="mb-2">
            You may decline to participate or withdraw at any time without
            penalty. If you decide to withdraw from the study after
            participating, you may do so any time before the results are
            published. If you wish to withdraw during your participation in
            Prolific, you may simply close the browser window with the
            experiment and return the task.
          </p>
          <p className="mb-2">
            Note that you will be compensated only after you have completed the
            activity and have successfully verified your Prolific ID. Please
            allow 2-3 days for this process.
          </p>
          <p className="mb-2">
            For an independent opinion regarding the research and the rights of
            research participants, you may contact the University of Toronto
            Research Oversight and Compliance Office - Human Research Ethics
            Program via email (ethics.review@utoronto.ca) or phone
            (416-946-3273).
          </p>
          <p className="mb-2">
            The research study you are participating in may be reviewed for
            quality assurance to make sure that the required laws and guidelines
            are followed. If chosen, (a) representative(s) of the Human Research
            Ethics Program (HREP) may access study-related data and/or consent
            materials as part of the review.
          </p>
          <p className="mb-2">
            All information accessed by the HREP will be upheld to the same
            level of confidentiality that has been stated by the research team.
          </p>
          <p className="mb-2">
            The investigator involved in this study is Ashton Anderson
            (ashton@cs.toronto.edu). The members of his research team
            responsible for the experiment interface and survey are Harsh Kumar
            (harsh@cs.toronto.edu) and Jonathan Vincentius
            (jon.vincentius@mail.utoronto.ca). If you have any questions or
            concerns, please contact either Harsh Kumar or Jonathan Vincentius.
          </p>
          <p className="mb-2">
            Please print or save a copy of this form for your records.
          </p>
          <ul className="list-consent mb-4 pl-4">
            <li>You have read and understood the information on this sheet;</li>
            <li>You are at least 18 years of age;</li>
            <li>
              You consent to participation and data collection for the
              aforementioned purposes;
            </li>
            <li>You may freely withdraw until the aforementioned date;</li>
            <li>
              You assign to the researchers all copyright of your survey
              contributions for use in all current and future work stemming from
              this project.
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute w-auto flex flex-col items-center space-y-5 bottom-6 left-1/2 -translate-x-1/2">
        <label className="text-xl text-white mt-2">
          <input type="checkbox" checked={checked} onChange={handleChange} />
          {`  `}I agree to this consent form*
        </label>
        <div className="w-3/5 flex ">
          <Components.Button
            label="SUBMIT"
            primary="#E459E1"
            shadow="#90258E"
            onClick={handleSubmit}
          />
          <img src={feather} alt="Feather" className="h-12 ml-4" />
        </div>
      </div>
    </div>
  );
};
