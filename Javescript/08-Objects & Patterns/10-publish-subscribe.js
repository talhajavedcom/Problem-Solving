// Implement publish-subscribe pattern
// Create a pub/sub system with subscribe, publish, and unsubscribe

// Sample test cases:
// pubsub.subscribe('topic', callback)
// pubsub.publish('topic', data) -> calls all callbacks
// pubsub.unsubscribe('topic', callback)
// Multiple subscribers per topic
// Publish to non-existent topic

// TODO: Implement PubSub class with methods:
// - subscribe(topic, callback)
// - publish(topic, data)
// - unsubscribe(topic, callback)

// Your implementation should handle:
// - Adding subscribers
// - Removing subscribers
// - Publishing messages
// - Multiple subscribers per topic
// - No subscribers for topic
// - Error handling

// Note: Similar to event emitter but with topics
