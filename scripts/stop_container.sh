```bash
#!/bin/bash

echo "Stopping existing TodoApp container..."

docker stop todoapp || true
docker rm todoapp || true

echo "Existing TodoApp container removed."
```
