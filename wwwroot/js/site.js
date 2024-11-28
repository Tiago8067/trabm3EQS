// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const toggler = document.querySelector(".toggler-btn");
toggler.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

// Sidebar toggle function
document.getElementById("menu-toggle").addEventListener("click", function () {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("toggled");
});

// JavaScript to toggle the sidebar
document.getElementById("toggle-sidebar").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    //sidebar.classList.toggle("d-none"); // Hide the sidebar
    sidebar.classList.toggle("collapsed");
});