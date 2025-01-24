import { accounts } from "~/db/schema/accounts";
import { sessions } from "~/db/schema/sessions";
import { users } from "~/db/schema/users";
import { verifications } from "~/db/schema/verifications";

const account = accounts;
const session = sessions;
const user = users;
const verification = verifications;

export default { account, session, user, verification };
