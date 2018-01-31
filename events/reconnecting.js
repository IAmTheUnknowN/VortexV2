module.exports = client => {
    client.on('reconnecting', () => {
        console.log(`Reconnecting at ${new Date()}`);
      })
}