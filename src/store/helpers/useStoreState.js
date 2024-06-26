import { useStore } from "vuex"
import { computed } from "vue"

const useStoreState = (keys) => {
	const store = useStore()

	if (Array.isArray(keys) && keys.length > 0) {
		return Object.fromEntries(
			keys.map(key => [key, computed(() => store.state[key])])
		)
	}
  
	return {
		state: computed(() => store.state)
	}
}

export { useStoreState }
