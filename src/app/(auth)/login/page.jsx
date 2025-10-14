"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./page.module.css";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(10, "Username must be at most 10 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must be at most 10 characters")
    .matches(/[A-Z]/, "Must contain at least 1 uppercase letter")
    .matches(/[a-z]/, "Must contain at least 1 lowercase letter")
    .matches(/[0-9]/, "Must contain at least 1 number"),
});

const Login = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.title = "Login";
    setFocus("username");
  }, [setFocus]);

  const handleLogin = async (data) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (result?.token) {
        if (rememberMe) {
          localStorage.setItem("token", JSON.stringify(result.token));
        }
        router.push("/products");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign In</h2>
        <p className={styles.subtitle}>Please sign in to access the market</p>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Username</label>
            <div
              className={`${styles.inputWrapper} ${
                errors.username ? styles.inputError : ""
              }`}
            >
              <input
                {...register("username")}
                className={styles.input}
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
            <label className={styles.label}>Password</label>
            <div
              className={`${styles.inputWrapper} ${
                errors.password ? styles.inputError : ""
              }`}
            >
              <input
                {...register("password")}
                className={styles.input}
                placeholder="Enter your password"
                type={passwordVisible ? "text" : "password"}
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "👁️‍🗨️" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <span className={styles.errorMessage}>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className={styles.rememberMeContainer}>
            <label className={styles.rememberMeLabel}>
              <input
                type="checkbox"
                className={styles.rememberMeCheckbox}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>

          <button className={styles.submitButton} type="submit">
            Sign In
          </button>
        </form>

        <div className={styles.linkContainer}>
          <Link href={"/register"}>
            <button className={styles.registerLink}>
              Don't have an account? Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
