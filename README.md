
---

# CIFAR-10 Training with ResNet18

This repository contains a collection of experiments for training a ResNet18 model on the CIFAR-10 dataset using PyTorch. The experiments include different optimizers, profiling, comparisons between GPU and CPU training, and exploring different data loader configurations.

## Requirements

- Python 3.7+
- PyTorch (2.4.1+)
- torchvision (0.9.0+)
- CUDA (NVDia T4, if running on GPU)
- Matplotlib (for plotting results)
- triton

### Install dependencies

You can install the required libraries using the following command:

```bash
pip install torch torchvision matplotlib triton
```

## Running the Experiments

The main script is designed to run all experiments with a single command.

### Usage

```bash
python main.py [--use-cuda] [--data-path DATA_PATH] [--num-workers NUM_WORKERS] [--optimizer OPTIMIZER]
```

### Options:

- `--use-cuda`: Optional flag. If provided, the experiments will be run on GPU if available. If not provided, it will default to CPU.
- `--data-path DATA_PATH`: Optional. Path where the CIFAR-10 dataset will be stored and loaded from. Defaults to `./data`.
- `--num-workers NUM_WORKERS`: Optional. The number of DataLoader workers to use. Defaults to 2.
- `--optimizer OPTIMIZER`: Optional. The optimizer to use for training. Options are `sgd`, `adam`, `nesterov`, `adagrad`, and `adadelta`. Defaults to `sgd`.

### Example command to run all experiments on GPU with 4 DataLoader workers:

```bash
python main.py --use-cuda --num-workers 4 --optimizer adam
```

### Experiments Overview:

1. **C1**: Trains a ResNet18 model on CIFAR-10 using different optimizers and prints the accuracy/loss for each epoch.
2. **C2**: Similar to C1, but optimized to track data-loading time and training time.
3. **C3**: Runs experiments to determine the optimal number of workers for data loading by measuring the data loading times.
4. **C4**: Compares the training time using one worker vs. the optimal number of workers found in experiment C3.
5. **C5**: Compares training time on CPU vs. GPU.
6. **C6**: Compares different optimizers (SGD, Adam, etc.) and prints the training time and accuracy for each.
7. **C7**: Trains a ResNet18 without Batch Normalization and compares performance.
8. **C8**: Runs the model in eager mode and compares with PyTorch's `torch.compile` mode in different optimization levels.
9. **Q3**: Prints the total number of trainable parameters and gradients for ResNet18.
10. **Profile C1 and C2**: Profiles the model training and provides detailed memory and performance metrics.

### Output

For each experiment, the training loss, accuracy, and various performance metrics (e.g., data loading time, computation time) will be printed to the console.

Additionally, some experiments will produce plots comparing different settings (e.g., workers vs. data loading time).

---
