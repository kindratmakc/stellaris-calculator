import { Attacker } from '$lib/attacker';
import { Target } from '$lib/target';
import { writable } from 'svelte/store';

export const target = writable(new Target(200, 100, 100, 60));
export const attacker = writable(new Attacker(0, 0));