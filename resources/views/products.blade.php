@extends('master')

@section('title', 'Our products')
@section('content')
    @include('include.page-header')
    <div class="page_linker">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <ul class="breadcrumb">
                        <li><a href="/"><i class="icon-home6"></i>Home</a></li>
                        <li class="active">Our Products</li>
                    </ul>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="row border-title">
                    <h2><span>Our Products</span></h2>
                    <p class="text-center">Our experts are ready to help find the right specialty chemical products and services to meet your needs. Just choose from one of the categories below to get started.</p>
                </div>
            </div>
        </div>
    </div>



    <section id="project" class="padding-bottom-half padding-top-half">
        <div class="container">
            <div id="project-filter" class="cbp-l-filters-alignCenter">
                <div data-filter="*" class="cbp-filter-item-active cbp-filter-item">Show All</div>
                <div data-filter=".home-care" class="cbp-filter-item">Home Care </div>
                <div data-filter=".chemicals" class="cbp-filter-item">Chemicals </div>
                <div data-filter=".other" class="cbp-filter-item">Other Products </div>
            </div>
            <div id="projects" class="cbp">
                <div class="cbp-item home-care">
                    <a href="images/products/detergents-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/detergents-chemicals.jpg" alt="detergents chemicals">
                    </a>
                    <div class="project_cap top15">
                        <h4>Detergents</h4>
                    </div>
                </div>
                <div class="cbp-item home-care">
                    <a href="images/products/toiletries-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/toiletries-chemicals.jpg" alt=" toiletries chemicals">
                    </a>
                    <div class="project_cap top15">
                        <h4>Toiletries</h4>
                    </div>
                </div>
                <div class="cbp-item home-care">
                    <a href="images/products/personal-care-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/personal-care-chemicals.jpg" alt="personal care chemicals">
                    </a>
                    <div class="project_cap top15">
                        <h4>Personal Care</h4>
                    </div>
                </div>
                <div class="cbp-item other">
                    <a href="images/products/rubber-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/rubber-chemicals.jpg" alt="rubber">
                    </a>
                    <div class="project_cap top15">
                        <h4>Rubber</h4>
                    </div>
                </div>
                <div class="cbp-item other">
                    <a href="images/products/cosmetic-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/cosmetic-chemicals.jpg" alt="cosmetic">
                    </a>
                    <div class="project_cap top15">
                        <h4>Cosmetic</h4>
                    </div>
                </div>
                <div class="cbp-item home-care">
                    <a href="images/products/paint-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/paint-chemicals.jpg" alt="paints">
                    </a>
                    <div class="project_cap top15">
                        <h4>Paints</h4>
                    </div>
                </div>
                <div class="cbp-item chemicals">
                    <a href="images/products/ceramic-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/ceramic-chemicals.jpg" alt="ceramic">
                    </a>
                    <div class="project_cap top15">
                        <h4>Ceramic</h4>
                    </div>
                </div>
                <div class="cbp-item other">
                    <a href="images/products/fiber-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/fiber-chemicals.jpg" alt="fiber">
                    </a>
                    <div class="project_cap top15">
                        <h4>Fiber</h4>
                    </div>
                </div>
                <div class="cbp-item chemicals">
                    <a href="images/products/laboratory-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/laboratory-chemicals.jpg" alt="laboratory">
                    </a>
                    <div class="project_cap top15">
                        <h4>Laboratory</h4>
                    </div>
                </div>
                <div class="cbp-item home-care chemicals">
                    <a href="images/products/laundry-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/laundry-chemicals.jpg" alt="laundry">
                    </a>
                    <div class="project_cap top15">
                        <h4>Laundry</h4>
                    </div>
                </div>
                <div class="cbp-item home-care chemicals">
                    <a href="images/products/perfumery-chemicals.jpg" class="cbp-lightbox">
                        <img src="images/products/thumbs/perfumery-chemicals.jpg" alt="perfumery">
                    </a>
                    <div class="project_cap top15">
                        <h4>Perfumery</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop