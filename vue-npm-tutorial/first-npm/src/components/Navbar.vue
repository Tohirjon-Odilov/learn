<template>
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'navbar-component'
}
</script>

<style scoped>
nav{
    /* margin: 0 70px; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}
nav ul{
    display: flex;
    justify-content: space-around;
}

nav ul li{
    margin: 0 30px;
    list-style: none;
}

nav ul li a {
    text-decoration: none;
    color: orange;
}
</style>
