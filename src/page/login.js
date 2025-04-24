import React, { useState } from "react";
import styles from "./Login.module.css"; 



const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isRegistering
            ? "http://localhost:8000/register"
            : "http://localhost:8000/login";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert(isRegistering ? "Cadastro realizado com sucesso!" : "Login realizado com sucesso!");
            } else {
                alert(data.message || "Ocorreu um erro.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.container}>
                <h2>{isRegistering ? "Cadastro" : "Login"}</h2>
                <form onSubmit={handleSubmit}>
                    {isRegistering && (
                        <div>
                            <label>Nome:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        {isRegistering ? "Cadastrar" : "Entrar"}
                    </button>
                </form>
                <button
                    onClick={() => setIsRegistering(!isRegistering)}
                    className={styles.toggleButton}
                >
                    {isRegistering
                        ? "Já tem uma conta? Faça login"
                        : "Não tem uma conta? Cadastre-se"}
                </button>
            </div>
        </div>
    );
};

export default Login;
