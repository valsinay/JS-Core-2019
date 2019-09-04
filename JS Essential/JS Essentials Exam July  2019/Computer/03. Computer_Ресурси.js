class Computer {

    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = +ramMemory;
        this.cpuGHz = +cpuGHz;
        this.hddMemory = +hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

     getTotalRamUsage(){

        let totalRamUsage =0;

        for(let program of this.taskManager){
            totalRamUsage +=program.ramUsage;
        }

        return totalRamUsage;
    }

     getTotalCpuUsage(){

        let totalCpuUsage =0;

        for(let program of this.taskManager){
            totalCpuUsage +=program.cpuUsage;
        }

        return totalCpuUsage;
    }

    installAProgram(name, requiredSpace) {

        if (this.hddMemory < requiredSpace) {

            throw new Error('There is not enough space on the hard drive');
        }
        let program = {
            name: name,
            requiredSpace: requiredSpace
        };

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;

        return program;
    }
    uninstallAProgram(name) {

        let exist = this.installedPrograms.findIndex(x => x.name === name);

        if (exist === -1) {
            throw new Error("Control panel is not responding");
        }

        let ram = this.installedPrograms.find(x => x.name === name);
        this.hddMemory += ram.requiredSpace

        this.installedPrograms.splice(exist, 1)
        return this.installedPrograms;

    }

    openAProgram(name) {

        let exist = this.installedPrograms.findIndex(x => x.name === name);
        let existInTaskManager = this.taskManager.findIndex(x => x.name === name);

        
        if (exist === -1) {
            throw new Error(`The ${name} is not recognized`);
        }
        if (existInTaskManager != -1) {
            throw new Error(`The ${name} is already open`)
        }

        exist = this.installedPrograms[exist];

        let ramUsage = (exist.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = exist.requiredSpace / this.cpuGHz/ 500 * 1.5;

        if(ramUsage + this.getTotalCpuUsage() >= 100){
            throw new Error(`${exist.name} caused out of memory exception`);
        }

        else if(cpuUsage + this.getTotalCpuUsage() >= 100){
            throw new Error(`${exist.name} caused out of memory exception`);

        }

        else if(ramUsage + this.getTotalCpuUsage() >= 100 && cpuUsage + this.getTotalCpuUsage() >= 100){
            throw new Error(`${exist.name} caused out of memory exception`);
        }
        let programme = {
           name,
          ramUsage,
          cpuUsage
        };

        this.taskManager.push(programme);

        return programme;
    }

    taskManagerView() {

        if (this.taskManager.length === 0) {
            return "All running smooth so far";
        }
       
            let output = [];
            for (let program of this.taskManager) {

                output.push(`Name - ${program.name } | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${+program.ramUsage.toFixed(0)}%`)
            }
            return output.join('\n');
    }
}
let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());
