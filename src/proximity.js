// proximity.js
export const CHAT_RADIUS = 50;

export function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function nearbyUsers(me, users) {
    return users.filter(
        u => u.userId !== me.userId && distance(me, u) <= CHAT_RADIUS
    );
}