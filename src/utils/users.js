const users = []

const addUser = ({ id , username, room }) => {
    // Clean data

    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate Data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing users
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    });

    // Validate
    if (existingUser) {
        return {
            error: 'A user name with the same name exists in the room'
        }
    }

    // Store user
    const user = { id, username, room };
    users.push(user);
    return { user };
}

const removeUser = (userId) => {
    const index = users.findIndex((user) => user.id === userId);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }

    return {
        error: 'No user exists with this id'
    };
}

const getUser = (userId) => {
    return users.find((user) => user.id === userId);
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}