/** @param {NS} ns */
export async function main(ns) {
    const host = ns.getHostname()
    /** @param {NS} ns */
	while(true) {
		if (ns.getServerSecurityLevel(host) > 20) {await ns.weaken(host)}
		if (ns.getServerMoneyAvailable(host) < 1000) {await ns.grow(host)}
		else await ns.hack(host)
	}
}
