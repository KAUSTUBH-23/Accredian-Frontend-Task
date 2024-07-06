import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { programData } from "../pages/landing-page/data";
import { notify } from "../lib/alert";
import { sendRefer } from "../referrel";

export default function ReferButton() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const { fromEmail, toEmail, refereeName, refereeEmail, program } = data;
    if (!fromEmail || !toEmail || !refereeName || !refereeEmail || !program) return;
    
    sendRefer({ program, referrer: { name: "", email: fromEmail }, referee: { name: refereeName, email: refereeEmail } })
      .then(data => {
        if (data && data.success) {
          notify(data.success || "Successfully referred", "success");
        } else {
          notify(data.error || "Please try again", "error");
        }
      })
      .catch(error => {
        notify(error?.response?.data?.error || "Please try again", "error");
      });
  };

  const programSelected = watch("program");

  return (
    <>
      <button
        className="btn btn-primary btn-md px-10"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        Refer now
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Enter Referral Information</h3>

          <form
            className="gap-2 flex flex-col"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="form-control w-full">
              <span className="label-text text-base">Your Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                {...register("referrerName", { required: true })}
              />
              {errors.referrerName && (
                <p className="text-red-500 text-sm mt-1">Please enter your name</p>
              )}
            </label>

            <label className="form-control w-full">
              <span className="label-text text-base">Your Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                {...register("fromEmail", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.fromEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fromEmail.message}
                </p>
              )}
            </label>

            <label className="form-control w-full">
              <span className="label-text text-base">Referee's Name</span>
              <input
                type="text"
                placeholder="Enter referee's name"
                className="input input-bordered w-full"
                {...register("refereeName", { required: true })}
              />
              {errors.refereeName && (
                <p className="text-red-500 text-sm mt-1">Please enter referee's name</p>
              )}
            </label>

            <label className="form-control w-full">
              <span className="label-text text-base">Referee's Email</span>
              <input
                type="email"
                placeholder="Enter referee's email"
                className="input input-bordered w-full"
                {...register("refereeEmail", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.refereeEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.refereeEmail.message}
                </p>
              )}
            </label>

            <label className="from-control flex flex-col gap-2 w-full relative">
              <span className="label-text text-base cursor-pointer">Program</span>
              <select
                className="select select-primary w-full"
                {...register("program", {
                  required: {
                    value: true,
                    message: "Please select a program",
                  },
                })}
              >
                {programData.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              {errors.program && (
                <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>
              )}
            </label>

            <button className="btn btn-primary btn-block mt-2 text-base">
              Refer now
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
