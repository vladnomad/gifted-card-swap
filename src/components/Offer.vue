<script setup>
    import { defineProps } from "vue"

    import ArrowSVG from "../assets/ArrowSVG.vue"

    const props = defineProps({
        offer: Object
    })

	const defineTimeAgo = (date) => {
		let timeAgo

		const offerDate = new Date(date)
		const currentDate = new Date()

		const daysAgo = Math.floor(
			(currentDate - offerDate) / 
			(1000 * 60 * 60 * 24)
		)

		if (daysAgo < 31) {
			timeAgo = `${daysAgo} days ago`
		} else if (daysAgo < 61) {
			timeAgo = "1 month ago"
		} else {
			timeAgo = `${Math.floor(daysAgo / 30)} months ago`
		}
		
		return timeAgo
	}
</script>


<template>
    <article class="offer">
        <h3 class="offer__title">{{ offer.title }}</h3>
        <div class="offer__author">
            <h4 class="offer__title">{{ offer.author.split(" ").join("\n") }}</h4>
            <p class="offer__date">{{ defineTimeAgo(offer.date) }}</p>
        </div>
        <div class="offer__tags">
            <a class="offer__tag" href="#" title="Some Title">{{ offer.tag }}</a>
        </div>
        <div class="offer__image-container">
            <img class="offer__image" alt="" :src="offer.image" />
        </div>
        <a class="offer__link" href="#">
            <ArrowSVG />
        </a>
    </article>
</template>


<style lang="scss" scoped>
	@import "../assets/styles/variables.scss";

	.arrow-svg {
		width: auto;
		height: 80px;
	}

	.offer {
		width: calc(100% - 4rem);
		height: 11rem;
		border-radius: 2.5rem;
		flex-direction: column;
		align-items: flex-start;
		padding: 2rem;
		position: relative;
		display: grid;
		grid-template-rows: 2rem 4.25rem 5.25rem;
		grid-template-columns: 55% 45%;
		max-height: 11.5rem;
		grid-auto-flow: column;
		flex-grow: 1;
		height: 11rem;
		box-shadow: 0px 1px 4px -1px $color-shadow--box;
		transition: width .35s ease-in-out;

		&__title, &__date {
			margin-block: 0;
		}

		&__title, &__author {
			font-weight: 500;
		}

		&__title {
			white-space: pre-line;
			position: relative;
			top: -4px;
		}

		&__date, &__tag {
			font-weight: 300;
		}

		&__date {
			white-space: nowrap;
			-webkit-line-clamp: 1; 
			overflow: hidden;
		}

		&__title {
			grid-column: 1 / span 2;
			grid-row: 1;

			&-link {
				grid-column: 1;
			}
		}

		&__author, &__link {
			grid-row: 3;
		}

		&__link, &__tags {
			grid-column: 2;
			justify-self: right;
		}

		&__tags {
			grid-row: 1;
		}

		&__link {
			grid-row: 2;
			display: flex;
			justify-content: flex-end;
			padding-block: 4px;
			position: relative;
			top: -.9375rem;
			transform: translateX(-65px);
			transition: 
				opacity .25s ease,
				transform .25s ease
			;
		}

		&__author {
			grid-column: 2;
			grid-row: 3;
			justify-self: flex-end;
			text-align: end;
			justify-content: flex-end;
			display: flex;
			flex-direction: column;
			height: 100%;
		}

		&__tags {
			display: flex;
			gap: 1rem;
		}

		&__image {
			border-radius: 1.5rem;
			object-fit: cover;
			align-self: flex-end;
			aspect-ratio: 1/1;
			height: 70%;
			object-position: center center;
			display: flex;
			max-height: 100%;
			width: 100%;
			box-shadow: 0px 1px 4px -1px $color-shadow--box;
			transition: 
				width .35s ease-in-out,
				height .35s ease-in-out
			;

			&-container {
				max-width: 220px;
				display: flex;
				border-radius: 1.5rem;
				position: absolute;
				bottom: 1.5rem;
				left: 1.5rem;
				width: 45%;
				height: 50%;
				transition: 
					width .35s ease-in-out, 
					height .35s ease-in-out
				;
			}
		}
	}

	@media screen and (hover: hover) and (min-width: 824px) {
		.offers__container:has(.offer:hover) .offer:not(:hover) {
			& .offer__image {
				height: 100%;
			}

			& .offer__image-container {
				width: calc(100% - 3rem);
				height: calc(100% - 3rem);
			}
		}

		.offer:not(:hover) {
			width: calc(calc(25% - 4rem) - 2rem);

			& .offer__link {
				opacity: 0;
			}
		}
		
		.offer:hover {
			width: calc(calc(50% - 4rem) - 2rem);
			grid-template-columns: 3fr 2fr;

			& .offer__image {
				max-height: 100%;
				height: 100%;
			}

			& .offer__link {
				transform: translateX(10px);
				transition: 
					opacity .45s ease,
					transform .45s ease
				;
			}
		}
	}
</style>
