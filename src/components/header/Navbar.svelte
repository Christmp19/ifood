<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
	} from "flowbite-svelte";
	import { DarkMode } from "flowbite-svelte";
	import { CalendarWeekSolid } from "flowbite-svelte-icons";
	let btnClass =
		"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2";

</script>

<Navbar fluid class="gap-20 dark:bg-slate-700 ">
	<div class="flex md:order-2">
		<div class="flex items-center sm:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.5em"
				height="1.5em"
				viewBox="0 0 256 256"
				{...$$props}
			>
				<path
					fill="currentColor"
					d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
				/>
			</svg>
		</div>
		<NavHamburger
			menuClass={"outline-none bg-transparent p-1 sm:ml-2 hover:bg-transparent sm:hover:bg-gray-700"}
		/>
		<div class="-ml-2 sm:ml-2 flex">
			<DarkMode {btnClass} />
		</div>
	</div>

	<NavUl class="order-2 xl:order-1 font-['Inter']">
		<NavLi href="#about" id="anime">À propos de nous</NavLi>
		<NavLi href="#services" id="anime">Services</NavLi>
		<NavLi href="#blog" id="anime">Blog</NavLi>
		<NavLi href="#caseStudies" id="anime">Etudes de cas</NavLi>
		<NavLi href="#howItWorks" id="anime">Comment ça fonctionne</NavLi>
		<!-- <NavLi href="#recrutement">Recrutement</NavLi> -->
	</NavUl>
	<CalendarWeekSolid />
</Navbar>
<!-- <h1 class="animate__animated animate__bounce">An animated element</h1> -->
