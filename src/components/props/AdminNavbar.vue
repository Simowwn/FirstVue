<template>
    <div class="navbar">
        <div class="logo">
            <img src="../../../images/SML.png" alt="Girl in a jacket" width="90" height="90"> 
        </div>
        <ul class="nav-links">
            <li>
                <router-link to="/Admin/Stall" class="nav-items">Stalls</router-link>
            </li>
            <li>
                <router-link to="/Admin/Users" class="nav-items">Users</router-link>
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

.logo {
    /* Align logo to the left */
}

.nav-links {
    display: flex;
    align-items: center; 
    justify-content: flex-end; /* Align links to the right */
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: flex;
    align-items: center; /* Align items vertically */
    margin-left: 20px; /* Add space between items */

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
.nav-items{
    font-weight: bold;
    text-decoration: none;
    color: black;
}
.nav-items:hover{
    background-color: #0F2F76;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
}

</style>