<template>
    <div class="navbar">
        <ul>
            <li>
                <img src="../../../images/SML.png" alt="Girl in a jacket" width="90" height="90"> 
            </li>
            <li>
                <button class="logout-button" @click="handleLogout">Logout</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        methods: {
            handleLogout() {
                localStorage.removeItem('access_token'); // Remove the access token
                this.$router.push('/'); // Redirect to the login page
            }
        }
    }
</script>

<style>
.navbar {
    height: 100px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    padding: 0 20px; 
    background-color: #fff; 
    border: 1px solid black;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center; 
    width: 100%; 
    justify-content: space-between;
}

li {
    display: flex;
    align-items: center; /* Align items vertically */
}

.logout-button {
    background-color: #FF4C4C;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

.logout-button:hover {
    background-color: #FF1A1A;
}


</style>