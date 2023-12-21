list = list([x for x in range(10) if x > 4])

list.pop()

list.insert(0, 0)

list[1:2] = [100]

list.append(999)

sorted_list = sorted(list)

#print(sorted_list, "\n", list, f"\nMAX: {max(list)}\nMIN: {min(list)}\n\nEXTENDED: {list + sorted_list}")

###########################################################################

original_set = set([1, 1, 0, 0, 1])
another_set = set([2, 0, 3, 5, 6, 6])

united_set = original_set.union(another_set)

#print(united_set)
#print(original_set.intersection(another_set))
#print(original_set.difference(another_set))
#print(original_set.symmetric_difference(another_set))
#print({x for x in ["test", "test", 1, 2, 3, 3, 5, 6, 6]})