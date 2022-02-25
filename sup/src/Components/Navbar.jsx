import React from 'react'

const Navbar = () => {
    return (
        <div>
            <aside>
            <p className="nav-Header"> Superman </p>
            <a href="javascript:void(0)">
                <i class="fa fa-user-o" aria-hidden="true"></i>
               Origin Story
            </a>
            <a href="javascript:void(0)">
                <i class="fa fa-laptop" aria-hidden="true"></i>
                Villains
            </a>
            <a href="javascript:void(0)">
                <i class="fa fa-clone" aria-hidden="true"></i>
                Allies
            </a>
            <a href="javascript:void(0)">
                <i class="fa fa-star-o" aria-hidden="true"></i>
                DCAU Superman
            </a>
            <a href="javascript:void(0)">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                DCEU Superman
            </a>
            </aside>

            <div class="social">
            <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
                <i class="fa fa-linkedin"></i>
            </a>
            </div>
        </div>
    )
}

export default Navbar
