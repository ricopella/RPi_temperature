const exec = require('child_process').execSync;
const fs = require('fs');

exec('modprobe w1-gpio');
exec('modprobe w1-therm');

const DEVICES_DIR = process.NODE_ENV === 'development' ? '../mocks/w1_slave' : '/sys/bus/w1/devices/28-00000a29c8d6/w1_slave';

function getTemperature(scale) {
    const P = new Promise((resolve, reject) => {
        fs.readFile(DEVICES_DIR, 'utf8', (err, result) => {
            if (err) {
                return reject(err);
            }

            resolve(result);
        });
    });

    return P.then(file => {
        const rows = file.split('\n');
        if (rows[0].substr(-3) !== 'YES') {
            throw new Error('Device is not connected!');
        }

        const temp = rows[1].split('t=')[1].trim();
        const c = Math.ceil(parseFloat(temp) / 1000);
        const f = Math.ceil(c * 9.0 / 5.0 + 32.0);

        if (scale === 'C') {
            console.log(c);
            return c;
        } else if (scale === 'F') {
            console.log(f)
            return f;
        } else {
            return [c, f]
        }

    });
}

getTemperature('F');