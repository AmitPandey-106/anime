"use client"
import { useState } from 'react';
import styles from "@/app/page.module.css"

const Signup = () => {
    const [userName, setUsername] = useState();
    const [userEmail, setEmail] = useState();
    const [userPassword, setPassword] = useState();
    const [userPhoneno, setPhoneno] = useState();

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log({ userName, userEmail, userPassword, userPhoneno });
        
        try {
            let result = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName, userEmail, userPassword, userPhoneno }),
            });

            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }

            result = await result.json();
            if (result.success) {
                alert("User successfully registered");
            } else {
                alert("Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Signup</h1>
            <form onSubmit={handleSignup} className={styles.form}>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="userName">Username:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="userEmail">Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        id="userEmail"
                        value={userEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="userPassword">Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        id="userPassword"
                        value={userPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label className={styles.label} htmlFor="userPhoneno">Phone No:</label>
                    <input
                        className={styles.input}
                        type="number"
                        id="userPhoneno"
                        value={userPhoneno}
                        onChange={(e) => setPhoneno(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Signup</button>
            </form>
        </div>
    );
};

export default Signup;
