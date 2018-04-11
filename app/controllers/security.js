async function validate(request, session)
{
    const cached = await fw.cache.get(session.jsid);
    console.log(session);
    const out = {
        valid: !!cached
    };

    if (out.valid) {
        out.credentials = cached.account;
    }

    return out;
}

module.exports = {
    validate : validate
}