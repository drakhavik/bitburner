/** @param {NS} ns */
export async function main(ns) {
	const scanResults = await ns.scan(ns.args[0])
	ns.print(scanResults)
	for (var i = 0; i < scanResults.length; i++) {
		await rootKit(scanResults[i])
	}
	//scanResults.forEach(await host => rootKit(host))
	await scanResults.reduce

	async function rootKit(target) {
		const portsReq = ns.getServerNumPortsRequired(target)
		var portsCracked = 0
		while (!ns.hasRootAccess(target)) {
			ns.print(portsReq - portsCracked)
			switch (portsReq - portsCracked) {
				case 2: { ns.ftpcrack(target); ns.print('FTP opened on' + target); portsCracked++ }
				case 1: { ns.brutessh(target); ns.print('SSH opened on' + target); portsCracked++ }
				case 0: { ns.nuke(target); ns.print('Nuked ' + target) }
			}
		}
		ns.print('Root gained on ' + target)
	}
}
