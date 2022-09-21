/** @param {NS} ns */
export async function main(ns) {
    const host = ns.getHostname()
	const maxThreads = (ns.getServerMaxRam(host) -ns.getScriptRam('startRemoteHack.js')) / ns.getScriptRam('remoteHack.js')
    ns.run('/remoteHack.js',maxThreads)
}
