import * as bcrypt from 'bcrypt'

export function hashPass(password: string) {
    return bcrypt.hashSync(password, 7)
}