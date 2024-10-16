def process_order(order_id, user, items):
    print(f"Processing order {order_id} for user {user}")
    
    valid_items = []
    for item in items:
        if 'id' in item and 'price' in item and item['price'] > 0:
            valid_items.append(item)
        else:
            print(f"Item {item} is invalid")
    
    subtotal = sum(item['price'] for item in valid_items)
    print(f"Subtotal for order {order_id}: {subtotal}")
    
    discount = 0
    if subtotal > 100:
        discount = subtotal * 0.1  # 10% discount for orders over $100
    print(f"Discount applied: {discount}")
    
    TAX_RATE = 0.08  # 8% tax
    tax = (subtotal - discount) * TAX_RATE
    print(f"Tax calculated: {tax}")
    
    total = subtotal - discount + tax
    print(f"Final total for order {order_id}: {total}")
    
    # 6. Update inventory
    for item in valid_items:
        print(f"Updating inventory for item {item['id']}")
    
    # 7. Payment processing (simplified)
    print(f"Charging {total} to user {user}")
    
    # 8. Logging the order
    print(f"Order {order_id} processed for user {user}")
    print("-" * 40)


def notComplexConditional():
    if a > b:
        return a

