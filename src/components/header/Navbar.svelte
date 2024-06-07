<script>
	import { Navbar, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
	import { DarkMode } from "flowbite-svelte";
	import { ShoppingBagSolid, UserCircleSolid } from "flowbite-svelte-icons";
	import Logo from "../../assets/logo.png";
	import { onMount } from "svelte";
	import { cart } from "../../stores/cartStore";

	let cartCount = 0;
	$: $cart, (cartCount = $cart.reduce((acc, item) => acc + item.quantity, 0));

	let btnClass =
		"text-black dark:text-white dark:bg-transparent bg-transparent hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-xl p-1";
	let isScrolled = false;
	let activeSection = "home";
	function handleScroll() {
		isScrolled = window.scrollY > 100;
	}

	// @ts-ignore
	function updateActiveSection(entries) {
		// @ts-ignore
		entries.forEach((entry) => {
			if (entry.isIntersecting && entry.target.id !== activeSection) {
				activeSection = entry.target.id;
			}
		});
	}

	onMount(() => {
		window.addEventListener("scroll", handleScroll);

		const observer = new IntersectionObserver(updateActiveSection, {
			threshold: 0.5,
		});

		document.querySelectorAll("section").forEach((section) => {
			observer.observe(section);
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
		};
	});
</script>

<!-- Navbar -->
<Navbar fluid class="lg:px-28 md:px-6 px-4">
	<div class=" md:order-3 order-2 flex">
		<div class="flex justify-between gap-6 items-center">
			<div
				id="anime"
				class="hidden md:flex flex-col items-center justify-center text-center cursor-pointer"
			>
				<UserCircleSolid
					class="w-8 md:w-5 md:h-5 h-8 dark:text-white"
				/>
				<span class="dark:text-white">Sign in</span>
			</div>
			<div
				class="flex flex-col items-center justify-center text-center cursor-pointer"
			>
				<ShoppingBagSolid
					class="w-8 md:w-6 md:h-6 h-8 dark:text-white"
				/>
				<span
					class="absolute md:top-5 ml-6 md:ml-4 w-5 h-5 md:w-4 md:h-4 rounded-full flex justify-center items-center bg-green-600 text-center text-white"
					>{cartCount}</span
				>
			</div>
			<DarkMode {btnClass} />
		</div>
		<NavHamburger
			class={"outline-none text-black dark:text-white dark:bg-transparent bg-transparent hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-xl p-1"}
		/>
	</div>
	<NavUl class=" order-2 font-['Inter']">
		<NavLi
			href="#home"
			id="anime"
			class={`text-lg dark:text-white ${activeSection === "home" ? "active" : ""}`}
			>Accueil</NavLi
		>
		<NavLi
			href="#about"
			id="anime"
			class={`text-lg dark:text-white ${activeSection === "about" ? "active" : ""}`}
			>A propos</NavLi
		>
		<NavLi
			href="#menu"
			id="anime"
			class={`text-lg dark:text-white ${activeSection === "menu" || activeSection === "popular" ? "active" : ""}`}
			>Menu</NavLi
		>
		<!-- <NavLi
			href="#popular"
			id="anime"
			class={`text-lg dark:text-white ${activeSection === "popular" ? "active" : ""}`}
			>Menu populaire</NavLi
		> -->
		<NavLi
			href="#blog"
			id="anime"
			class={`text-lg dark:text-white ${activeSection === "blog" ? "active" : ""}`}
			>Blog</NavLi
		>
		<NavLi
			href="#order"
			id="anime"
			class={`text-lg dark:text-white ${activeSection === "order" || activeSection === "footer" ? "active" : ""}`}
			>Commander</NavLi
		>
		<NavLi href="#compte" id="anime" class="flex md:hidden flex-col gap-1">
			<UserCircleSolid class="w-8 h-8 dark:text-white" />
			<span class="dark:text-white text-lg">Sign in</span>
		</NavLi>

		<!-- <NavLi href="#panier" id="anime" class="flex md:hidden">
			<ShoppingBagSolid class="w-8 md:w-6 md:h-6 h-8 dark:text-white" />
			<span
				class="absolute md:top-5 ml-6 md:ml-4 w-5 h-5 md:w-4 md:h-4 rounded-full flex justify-center items-center bg-green-600 text-center text-white"
				>{cartCount}</span
			>
		</NavLi> -->
	</NavUl>
	<div class="order-1">
		<a href="/" class="flex items-center gap-2">
			<img src={Logo} alt="logo" class="w-6 h-6" />
			<span
				class="capitalize text-2xl font-bold text-blue-950 dark:text-white"
				>food</span
			>
		</a>
	</div>
</Navbar>
