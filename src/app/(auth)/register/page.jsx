"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const schema = yup.object().shape({
  id: yup
    .number()
    .required("ID is required")
    .positive("ID must be a positive number")
    .integer("ID must be an integer"),
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(10, "Username must be at most 10 characters"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must be at most 10 characters")
    .matches(/[A-Z]/, "Must contain at least 1 uppercase letter")
    .matches(/[a-z]/, "Must contain at least 1 lowercase letter")
    .matches(/[0-9]/, "Must contain at least 1 number"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(5, "Phone number must be at least 5 digits")
    .max(50, "Phone number must be at most 50 digits")
    .matches(/^[0-9]+$/, "Phone number must contain only digits"),
});

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleRegister = async (data) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result?.id) {
        router.push("/products");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className={styles.formGroup}>
            <label className={styles.label}>ID</label>
            <div>
              <input
                {...register("id")}
                className={`${styles.input} ${
                  errors.id ? styles.inputError : ""
                }`}
                type="number"
                placeholder="Enter your ID"
              />
            </div>
            {errors.id && (
              <span className={styles.errorMessage}>{errors.id.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Username</label>
            <div>
              <input
                {...register("username")}
                className={`${styles.input} ${
                  errors.username ? styles.inputError : ""
                }`}
                type="text"
                placeholder="Enter your username"
              />
            </div>
            {errors.username && (
              <span className={styles.errorMessage}>
                {errors.username.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <div>
              <input
                {...register("email")}
                className={`${styles.input} ${
                  errors.email ? styles.inputError : ""
                }`}
                type="email"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <span className={styles.errorMessage}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Phone</label>
            <div>
              <input
                {...register("phone")}
                className={`${styles.input} ${
                  errors.phone ? styles.inputError : ""
                }`}
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
            {errors.phone && (
              <span className={styles.errorMessage}>
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <div>
              <input
                {...register("password")}
                className={`${styles.input} ${
                  errors.password ? styles.inputError : ""
                }`}
                type="password"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && (
              <span className={styles.errorMessage}>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Confirm Password</label>
            <div>
              <input
                {...register("confirmPassword")}
                className={`${styles.input} ${
                  errors.confirmPassword ? styles.inputError : ""
                }`}
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            {errors.confirmPassword && (
              <span className={styles.errorMessage}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </form>

        <div className={styles.linkContainer}>
          <Link href={"/login"}>
            <button className={styles.notRegistered}>
              Already Registered? Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
