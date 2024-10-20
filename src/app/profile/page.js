import styles from "@/app/page.module.css";
const getUserDetails = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/products", {
            next: { revalidate: 10 },
        });
        const data = await response.json();
        if (data.success) {
            return data.result;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching user details:", error);
        return [];
    }
};

export default async function Profile() {
    const userDetails = await getUserDetails();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Profile Page</h1>
            <p className={styles.description}>Welcome to your profile!</p>

            {userDetails.length > 0 ? (
                userDetails.map((item) => (
                    <p className={styles.description} key={item._id}>{item.userName}</p> // Use a key for list items
                ))
            ) : (
                <p>No user details available.</p>
            )}
        </div>
    );
}
