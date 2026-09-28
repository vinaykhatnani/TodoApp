```bash
#!/bin/bash

echo "Loading TodoApp Docker image..."

docker load -i /opt/todoapp/todoapp.tar

echo "Starting TodoApp container..."

docker run -d \
  --name todoapp \
  -p 3000:3000 \
  todoapp:latest

echo "TodoApp started successfully."
```
