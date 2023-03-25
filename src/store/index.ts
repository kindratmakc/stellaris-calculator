import {defineStore} from "pinia";
import {Target} from "@/domain/target";
import {Attacker} from "@/domain/attacker";

export default defineStore('main', {
  state: () => ({
    target: new Target(200, 100, 100, 60),
    attacker: new Attacker(0, 0),
  }),
});
