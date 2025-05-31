import { useEffect, useRef, useState } from "react";

export function getRefValue(ref) {
	return ref.current
}

export function useStateRef(initialValue) {
	const [state, setState] = useState(initialValue);
	const ref = useRef(state);

	useEffect(() => {
		ref.current = state;
	}, [state]);

	return [state, setState, ref];
}